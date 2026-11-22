"use client";

import { useEffect, useEffectEvent, useState, useTransition } from "react";
import {
  applyLocalRatingChange,
  deleteDishRating,
  fetchDishRatingSummaries,
  upsertDishRating,
  type DishRatingSummary,
} from "@/lib/dish-ratings";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import styles from "./dish-rating.module.css";

const QUICK_FAVORITE_RATING = 5;

type DishRatingProps = {
  dishId: string;
  dishName: string;
  summary: DishRatingSummary | undefined;
  onRated: (dishId: string, next: DishRatingSummary) => void;
  enabled: boolean;
};

function voteLabel(count: number): string {
  return count === 1 ? "1 voto" : `${count} votos`;
}

export function DishRating({
  dishId,
  dishName,
  summary,
  onRated,
  enabled,
}: DishRatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const average = summary?.average ?? 0;
  const count = summary?.count ?? 0;
  const userRating = summary?.userRating ?? null;
  const hasVoted = userRating != null;
  const displayValue = hover ?? userRating ?? 0;

  const commitRating = useEffectEvent((nextUserRating: number | null) => {
    if (!enabled || pending) return;
    setError(null);

    startTransition(async () => {
      const result =
        nextUserRating == null
          ? await deleteDishRating(dishId)
          : await upsertDishRating(dishId, nextUserRating);

      if (!result.ok) {
        setError(result.error ?? "No se pudo guardar el voto");
        return;
      }

      onRated(
        dishId,
        applyLocalRatingChange(summary, dishId, nextUserRating),
      );
    });
  });

  const handleQuickFavorite = () => {
    if (hasVoted) {
      commitRating(null);
      return;
    }
    commitRating(QUICK_FAVORITE_RATING);
  };

  const handleStarClick = (rating: number) => {
    if (userRating === rating) {
      commitRating(null);
      return;
    }
    commitRating(rating);
  };

  return (
    <div className={styles.root}>
      <p className={styles.meta} aria-live="polite">
        {count > 0 ? (
          <>
            <span className={styles.average} aria-label={`Promedio ${average.toFixed(1)} de 5`}>
              {average.toFixed(1)} ★
            </span>
            <span className={styles.separator} aria-hidden="true">
              ·
            </span>
            <span className={styles.count}>{voteLabel(count)}</span>
          </>
        ) : (
          <>
            <span className={styles.count}>{voteLabel(0)}</span>
            <span className={styles.separator} aria-hidden="true">
              ·
            </span>
            <span className={styles.hint}>Sé el primero en votar</span>
          </>
        )}
        {hasVoted ? (
          <>
            <span className={styles.separator} aria-hidden="true">
              ·
            </span>
            <span className={styles.userVote}>
              Tu voto: {userRating}
            </span>
          </>
        ) : null}
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.favorite}${hasVoted ? ` ${styles.favoriteActive}` : ""}`}
          aria-pressed={hasVoted}
          aria-label={
            hasVoted
              ? `Quitar tu voto de ${dishName}`
              : `Marcar ${dishName} como favorito`
          }
          disabled={!enabled || pending}
          onClick={handleQuickFavorite}
        >
          <span className={styles.favoriteIcon} aria-hidden="true">
            {hasVoted ? "♥" : "♡"}
          </span>
          <span>{hasVoted ? "Favorito" : "Votar"}</span>
        </button>

        <div
          className={styles.stars}
          role="group"
          aria-label={`Calificación de ${dishName} de 1 a 5 estrellas`}
          onMouseLeave={() => setHover(null)}
        >
          {[1, 2, 3, 4, 5].map((value) => {
            const active = value <= displayValue;
            return (
              <button
                key={value}
                type="button"
                className={`${styles.star}${active ? ` ${styles.starActive}` : ""}`}
                aria-label={`${value} estrella${value === 1 ? "" : "s"} para ${dishName}`}
                aria-pressed={userRating === value}
                disabled={!enabled || pending}
                onMouseEnter={() => setHover(value)}
                onFocus={() => setHover(value)}
                onBlur={() => setHover(null)}
                onClick={() => handleStarClick(value)}
              >
                ★
              </button>
            );
          })}
        </div>
      </div>

      {!enabled ? (
        <p className={styles.status}>Votación no disponible ahora</p>
      ) : null}
      {error ? (
        <p className={`${styles.status} ${styles.statusError}`} role="alert">
          {error}
        </p>
      ) : null}
      {pending ? <p className={styles.status}>Guardando…</p> : null}
    </div>
  );
}

export function useDishRatings(dishIds: string[]) {
  const [summaries, setSummaries] = useState<Record<string, DishRatingSummary>>(
    {},
  );
  const [loading, setLoading] = useState(true);
  const enabled = isSupabaseConfigured();
  const dishIdsKey = dishIds.join("|");

  const load = useEffectEvent(async (ids: string[]) => {
    if (!enabled || ids.length === 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const next = await fetchDishRatingSummaries(ids);
    setSummaries(next);
    setLoading(false);
  });

  useEffect(() => {
    void load(dishIdsKey ? dishIdsKey.split("|") : []);
  }, [dishIdsKey, enabled]);

  return {
    summaries,
    enabled,
    loading,
    setSummary: (dishId: string, next: DishRatingSummary) => {
      setSummaries((prev) => ({ ...prev, [dishId]: next }));
    },
  };
}
