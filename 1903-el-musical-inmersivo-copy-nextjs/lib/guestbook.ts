import { getOrCreateVoterToken } from "@/lib/dish-ratings";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

export const GUESTBOOK_AUTHOR_KEY = "1903-guestbook-author-name";
export const GUESTBOOK_COOLDOWN_KEY = "1903-guestbook-last-post";
export const GUESTBOOK_COOLDOWN_MS = 15_000;
export const GUESTBOOK_MESSAGE_LIMIT = 30;
export const GUESTBOOK_NAME_MAX = 40;
export const GUESTBOOK_MESSAGE_MAX = 280;

export type GuestbookMessage = {
  id: string;
  authorName: string;
  message: string;
  voterToken: string;
  createdAt: string;
};

type GuestbookRow = {
  id: string;
  author_name: string;
  message: string;
  voter_token: string;
  created_at: string;
};

/** Strip tags / control chars while typing (preserves spaces/newlines). */
export function sanitizePlainTextInput(input: string, maxLength: number): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .slice(0, maxLength);
}

/** Final plain-text sanitize before persist/display. */
export function sanitizePlainText(input: string, maxLength: number): string {
  return sanitizePlainTextInput(input, maxLength)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function getStoredAuthorName(): string {
  if (typeof window === "undefined") return "";
  try {
    return sanitizePlainText(
      window.localStorage.getItem(GUESTBOOK_AUTHOR_KEY) ?? "",
      GUESTBOOK_NAME_MAX,
    );
  } catch {
    return "";
  }
}

export function storeAuthorName(name: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      GUESTBOOK_AUTHOR_KEY,
      sanitizePlainText(name, GUESTBOOK_NAME_MAX),
    );
  } catch {
    /* ignore quota / private mode */
  }
}

export function getCooldownRemainingMs(now = Date.now()): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(GUESTBOOK_COOLDOWN_KEY);
    if (!raw) return 0;
    const last = Number(raw);
    if (!Number.isFinite(last)) return 0;
    return Math.max(0, GUESTBOOK_COOLDOWN_MS - (now - last));
  } catch {
    return 0;
  }
}

export function markGuestbookPostSent(now = Date.now()): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(GUESTBOOK_COOLDOWN_KEY, String(now));
  } catch {
    /* ignore */
  }
}

function mapRow(row: GuestbookRow): GuestbookMessage {
  return {
    id: String(row.id),
    authorName: sanitizePlainText(String(row.author_name ?? ""), GUESTBOOK_NAME_MAX),
    message: sanitizePlainText(String(row.message ?? ""), GUESTBOOK_MESSAGE_MAX),
    voterToken: String(row.voter_token ?? ""),
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

/** Relative time labels in Spanish (es). */
export function formatRelativeTimeEs(
  iso: string,
  now = Date.now(),
): string {
  const then = Date.parse(iso);
  if (!Number.isFinite(then)) return "";

  const diffSec = Math.round((then - now) / 1000);
  const abs = Math.abs(diffSec);
  const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

  if (abs < 60) return rtf.format(diffSec, "second");
  const diffMin = Math.round(diffSec / 60);
  if (Math.abs(diffMin) < 60) return rtf.format(diffMin, "minute");
  const diffHour = Math.round(diffMin / 60);
  if (Math.abs(diffHour) < 24) return rtf.format(diffHour, "hour");
  const diffDay = Math.round(diffHour / 24);
  if (Math.abs(diffDay) < 30) return rtf.format(diffDay, "day");
  const diffMonth = Math.round(diffDay / 30);
  if (Math.abs(diffMonth) < 12) return rtf.format(diffMonth, "month");
  return rtf.format(Math.round(diffMonth / 12), "year");
}

/** Short clock time for chat bubbles (e.g. 14:05). */
export function formatClockTimeEs(iso: string): string {
  const then = Date.parse(iso);
  if (!Number.isFinite(then)) return "";
  return new Intl.DateTimeFormat("es", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(then);
}

/** Stable accent color for a display name / token (dark UI friendly). */
export function accentColorForAuthor(seed: string): string {
  const palette = [
    "#E4D5B7",
    "#B07B3E",
    "#D4A574",
    "#C9B896",
    "#AF7A5C",
    "#8FA8C4",
    "#A8C5A0",
    "#C9A0B8",
  ];
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return palette[hash % palette.length];
}

export async function fetchGuestbookMessages(): Promise<GuestbookMessage[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("guestbook_messages")
    .select("id, author_name, message, voter_token, created_at")
    .order("created_at", { ascending: false })
    .limit(GUESTBOOK_MESSAGE_LIMIT);

  if (error || !data) {
    console.warn("[guestbook] fetch failed:", error?.message);
    return [];
  }

  // Chronological for chat-like reading (oldest → newest).
  return (data as GuestbookRow[]).map(mapRow).reverse();
}

export async function postGuestbookMessage(input: {
  authorName: string;
  message: string;
}): Promise<{ ok: boolean; message?: GuestbookMessage; error?: string }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { ok: false, error: "El libro de visitas no está disponible ahora" };
  }

  const remaining = getCooldownRemainingMs();
  if (remaining > 0) {
    const secs = Math.ceil(remaining / 1000);
    return {
      ok: false,
      error: `Espera ${secs}s antes de publicar otro mensaje`,
    };
  }

  const authorName = sanitizePlainText(input.authorName, GUESTBOOK_NAME_MAX);
  const message = sanitizePlainText(input.message, GUESTBOOK_MESSAGE_MAX);
  const voterToken = getOrCreateVoterToken();

  if (authorName.length < 2) {
    return { ok: false, error: "Escribe un nombre o apodo (mín. 2 caracteres)" };
  }
  if (message.length < 2) {
    return { ok: false, error: "Escribe un mensaje un poco más largo" };
  }
  if (!voterToken) {
    return { ok: false, error: "No se pudo identificar tu sesión de visita" };
  }

  const { data, error } = await supabase
    .from("guestbook_messages")
    .insert({
      author_name: authorName,
      message,
      voter_token: voterToken,
    })
    .select("id, author_name, message, voter_token, created_at")
    .single();

  if (error || !data) {
    console.warn("[guestbook] insert failed:", error?.message);
    return {
      ok: false,
      error: error?.message ?? "No se pudo publicar el mensaje",
    };
  }

  storeAuthorName(authorName);
  markGuestbookPostSent();

  return { ok: true, message: mapRow(data as GuestbookRow) };
}

/** Delete own message only (matched by id + voter_token). */
export async function deleteGuestbookMessage(
  messageId: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { ok: false, error: "El chat no está disponible ahora" };
  }

  const voterToken = getOrCreateVoterToken();
  if (!voterToken) {
    return { ok: false, error: "No se pudo verificar tu sesión" };
  }

  const { data, error } = await supabase
    .from("guestbook_messages")
    .delete()
    .eq("id", messageId)
    .eq("voter_token", voterToken)
    .select("id");

  if (error) {
    console.warn("[guestbook] delete failed:", error.message);
    return { ok: false, error: error.message };
  }

  if (!data || data.length === 0) {
    return {
      ok: false,
      error: "Solo puedes borrar tus propios mensajes",
    };
  }

  return { ok: true };
}

export function subscribeGuestbookChanges(handlers: {
  onInsert: (message: GuestbookMessage) => void;
  onDelete: (messageId: string) => void;
}): (() => void) | null {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return null;

  const channel: RealtimeChannel = supabase
    .channel("guestbook-public")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "guestbook_messages",
      },
      (payload) => {
        const row = payload.new as GuestbookRow | null;
        if (!row?.id) return;
        handlers.onInsert(mapRow(row));
      },
    )
    .on(
      "postgres_changes",
      {
        event: "DELETE",
        schema: "public",
        table: "guestbook_messages",
      },
      (payload) => {
        const row = payload.old as { id?: string } | null;
        if (!row?.id) return;
        handlers.onDelete(String(row.id));
      },
    )
    .subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}
