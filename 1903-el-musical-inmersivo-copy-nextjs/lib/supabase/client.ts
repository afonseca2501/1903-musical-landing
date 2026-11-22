import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type DishRatingRow = {
  dish_id: string;
  voter_token: string;
  rating: number;
};

let cachedClient: SupabaseClient | null | undefined;

/**
 * Browser Supabase client. Returns `null` when env vars are missing
 * so the UI can degrade without crashing the build/runtime.
 */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!url || !key) {
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return cachedClient;
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseBrowserClient() !== null;
}
