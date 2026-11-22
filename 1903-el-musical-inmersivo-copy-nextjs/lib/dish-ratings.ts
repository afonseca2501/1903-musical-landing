import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const VOTER_TOKEN_KEY = "1903-dish-voter-token";

export type DishRatingSummary = {
  dishId: string;
  average: number;
  count: number;
  userRating: number | null;
};

export function getOrCreateVoterToken(): string {
  if (typeof window === "undefined") return "";

  try {
    const existing = window.localStorage.getItem(VOTER_TOKEN_KEY);
    if (existing && existing.length >= 8) return existing;

    const token =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `voter-${Date.now()}-${Math.random().toString(36).slice(2)}`;

    window.localStorage.setItem(VOTER_TOKEN_KEY, token);
    return token;
  } catch {
    return `session-${Date.now()}`;
  }
}

function emptySummary(dishId: string): DishRatingSummary {
  return { dishId, average: 0, count: 0, userRating: null };
}

/** Load aggregates + current voter rating for a set of dishes. */
export async function fetchDishRatingSummaries(
  dishIds: string[],
): Promise<Record<string, DishRatingSummary>> {
  const base: Record<string, DishRatingSummary> = {};
  for (const id of dishIds) base[id] = emptySummary(id);

  const supabase = getSupabaseBrowserClient();
  if (!supabase || dishIds.length === 0) return base;

  const voterToken = getOrCreateVoterToken();

  const { data, error } = await supabase
    .from("dish_ratings")
    .select("dish_id, rating, voter_token")
    .in("dish_id", dishIds);

  if (error || !data) {
    console.warn("[dish-ratings] fetch failed:", error?.message);
    return base;
  }

  const totals: Record<string, { sum: number; count: number }> = {};
  for (const id of dishIds) totals[id] = { sum: 0, count: 0 };

  for (const row of data) {
    const dishId = String(row.dish_id);
    const rating = Number(row.rating);
    if (!totals[dishId] || !Number.isFinite(rating)) continue;

    totals[dishId].sum += rating;
    totals[dishId].count += 1;

    if (voterToken && row.voter_token === voterToken) {
      base[dishId].userRating = rating;
    }
  }

  for (const id of dishIds) {
    const { sum, count } = totals[id];
    base[id].count = count;
    base[id].average = count > 0 ? Math.round((sum / count) * 10) / 10 : 0;
  }

  return base;
}

/** Create or update this browser's vote for a dish (1–5). */
export async function upsertDishRating(
  dishId: string,
  rating: number,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { ok: false, error: "Supabase no configurado" };
  }

  const clamped = Math.min(5, Math.max(1, Math.round(rating)));
  const voterToken = getOrCreateVoterToken();
  if (!voterToken) {
    return { ok: false, error: "No se pudo crear el token de voto" };
  }

  const { error } = await supabase.from("dish_ratings").upsert(
    {
      dish_id: dishId,
      voter_token: voterToken,
      rating: clamped,
    },
    { onConflict: "dish_id,voter_token" },
  );

  if (error) {
    console.warn("[dish-ratings] upsert failed:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

/** Remove this browser's vote for a dish. */
export async function deleteDishRating(
  dishId: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { ok: false, error: "Supabase no configurado" };
  }

  const voterToken = getOrCreateVoterToken();
  if (!voterToken) {
    return { ok: false, error: "No se pudo leer el token de voto" };
  }

  const { error } = await supabase
    .from("dish_ratings")
    .delete()
    .eq("dish_id", dishId)
    .eq("voter_token", voterToken);

  if (error) {
    console.warn("[dish-ratings] delete failed:", error.message);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

/** Optimistic local summary after upsert or delete. */
export function applyLocalRatingChange(
  summary: DishRatingSummary | undefined,
  dishId: string,
  nextUserRating: number | null,
): DishRatingSummary {
  const prevAvg = summary?.average ?? 0;
  const prevCount = summary?.count ?? 0;
  const prevUser = summary?.userRating ?? null;

  let nextCount = prevCount;
  let nextSum = prevAvg * prevCount;

  if (prevUser == null && nextUserRating != null) {
    nextCount += 1;
    nextSum += nextUserRating;
  } else if (prevUser != null && nextUserRating == null) {
    nextCount = Math.max(0, nextCount - 1);
    nextSum -= prevUser;
  } else if (prevUser != null && nextUserRating != null) {
    nextSum = nextSum - prevUser + nextUserRating;
  }

  const nextAverage =
    nextCount > 0 ? Math.round((nextSum / nextCount) * 10) / 10 : 0;

  return {
    dishId,
    average: nextAverage,
    count: nextCount,
    userRating: nextUserRating,
  };
}
