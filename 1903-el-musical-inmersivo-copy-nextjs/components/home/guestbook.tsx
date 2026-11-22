"use client";

import {
  FormEvent,
  KeyboardEvent,
  UIEvent,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  useTransition,
} from "react";
import { Reveal } from "@/components/Reveal";
import { getOrCreateVoterToken } from "@/lib/dish-ratings";
import {
  accentColorForAuthor,
  deleteGuestbookMessage,
  fetchGuestbookMessages,
  formatClockTimeEs,
  formatRelativeTimeEs,
  getCooldownRemainingMs,
  getStoredAuthorName,
  GUESTBOOK_MESSAGE_MAX,
  GUESTBOOK_NAME_MAX,
  postGuestbookMessage,
  sanitizePlainText,
  sanitizePlainTextInput,
  subscribeGuestbookChanges,
  type GuestbookMessage,
} from "@/lib/guestbook";
import { withSectionTemplate } from "@/lib/section-template";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import styles from "./guestbook.module.css";

const NEAR_BOTTOM_PX = 96;

function mergeMessage(
  list: GuestbookMessage[],
  next: GuestbookMessage,
): GuestbookMessage[] {
  if (list.some((item) => item.id === next.id)) return list;
  const merged = [...list, next];
  if (merged.length <= 30) return merged;
  return merged.slice(merged.length - 30);
}

export function HomeGuestbook(props: { backdropClass?: string }) {
  const enabled = isSupabaseConfigured();
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cooldownSec, setCooldownSec] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [pending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [manageOwnOpen, setManageOwnOpen] = useState(false);
  const [voterToken, setVoterToken] = useState("");
  const threadRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const ownMessages = messages.filter(
    (item) => Boolean(voterToken) && item.voterToken === voterToken,
  );
  const remainingChars = GUESTBOOK_MESSAGE_MAX - message.length;
  const canSubmit =
    enabled &&
    !pending &&
    cooldownSec === 0 &&
    authorName.trim().length >= 2 &&
    message.trim().length >= 2;

  const refreshCooldown = useEffectEvent(() => {
    const remaining = getCooldownRemainingMs();
    setCooldownSec(remaining > 0 ? Math.ceil(remaining / 1000) : 0);
  });

  const scrollThreadToEnd = useEffectEvent((force = false) => {
    const el = threadRef.current;
    if (!el) return;
    if (!force && !stickToBottomRef.current) return;
    el.scrollTop = el.scrollHeight;
  });

  const loadMessages = useEffectEvent(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const rows = await fetchGuestbookMessages();
    setMessages(rows);
    setLoading(false);
    stickToBottomRef.current = true;
    requestAnimationFrame(() => scrollThreadToEnd(true));
  });

  useEffect(() => {
    setAuthorName(getStoredAuthorName());
    setVoterToken(getOrCreateVoterToken());
    void loadMessages();
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const unsubscribe = subscribeGuestbookChanges({
      onInsert: (incoming) => {
        setMessages((prev) => mergeMessage(prev, incoming));
        requestAnimationFrame(() => scrollThreadToEnd(false));
      },
      onDelete: (messageId) => {
        setMessages((prev) => prev.filter((item) => item.id !== messageId));
      },
    });

    return () => {
      unsubscribe?.();
    };
  }, [enabled]);

  useEffect(() => {
    refreshCooldown();
    const id = window.setInterval(() => {
      setNow(Date.now());
      refreshCooldown();
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (ownMessages.length === 0) setManageOwnOpen(false);
  }, [ownMessages.length]);

  const handleThreadScroll = (event: UIEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const distanceFromBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distanceFromBottom < NEAR_BOTTOM_PX;
  };

  const submitMessage = () => {
    if (!canSubmit) return;

    setError(null);

    const name = sanitizePlainText(authorName, GUESTBOOK_NAME_MAX);
    const body = sanitizePlainText(message, GUESTBOOK_MESSAGE_MAX);

    startTransition(async () => {
      const result = await postGuestbookMessage({
        authorName: name,
        message: body,
      });

      if (!result.ok) {
        setError(result.error ?? "No se pudo publicar");
        refreshCooldown();
        return;
      }

      if (result.message) {
        stickToBottomRef.current = true;
        setMessages((prev) => mergeMessage(prev, result.message!));
        requestAnimationFrame(() => scrollThreadToEnd(true));
      }

      setMessage("");
      setAuthorName(name);
      refreshCooldown();
      messageInputRef.current?.focus();
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage();
  };

  const handleMessageKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    submitMessage();
  };

  const handleDeleteOwn = (messageId: string) => {
    if (!enabled || deletingId || pending) return;
    setError(null);
    setDeletingId(messageId);

    startTransition(async () => {
      const result = await deleteGuestbookMessage(messageId);
      setDeletingId(null);

      if (!result.ok) {
        setError(result.error ?? "No se pudo borrar el mensaje");
        return;
      }

      setMessages((prev) => prev.filter((item) => item.id !== messageId));
    });
  };

  const truncatePreview = (text: string, max = 72) => {
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1).trimEnd()}…`;
  };

  return (
    <Reveal>
      <section
        className={withSectionTemplate(
          3,
          "section",
          props.backdropClass,
          styles.section,
        )}
        data-template="3"
        aria-labelledby="guestbook-heading"
      >
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>En vivo</p>
            <h2 id="guestbook-heading" className={styles.title}>
              Voces del Público
            </h2>
            <p className={styles.intro}>
              Sala abierta del musical: saluda, comparte una impresión o deja un
              recuerdo.
            </p>
          </header>

          <div className={styles.chatShell}>
            <div className={styles.roomHeader}>
              <div className={styles.roomAvatar} aria-hidden="true">
                19
              </div>
              <div className={styles.roomInfo}>
                <h3 className={styles.roomTitle}>1903 · Chat del público</h3>
                <p className={styles.roomStatus}>
                  {enabled ? (
                    <span className={styles.livePill}>
                      <span className={styles.liveDot} aria-hidden="true" />
                      En vivo
                    </span>
                  ) : (
                    <span className={styles.offlinePill}>Fuera de línea</span>
                  )}
                  <span>
                    {loading
                      ? "Conectando…"
                      : `${messages.length} mensaje${messages.length === 1 ? "" : "s"} reciente${messages.length === 1 ? "" : "s"}`}
                  </span>
                </p>
              </div>
            </div>

            <div
              ref={threadRef}
              className={styles.thread}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Chat en vivo del público"
              onScroll={handleThreadScroll}
            >
              {!enabled ? (
                <p className={styles.empty}>
                  El chat no está disponible en este momento.
                </p>
              ) : null}

              {enabled && !loading && messages.length === 0 ? (
                <p className={styles.empty}>
                  La sala está en silencio. Escribe el primer mensaje.
                </p>
              ) : null}

              {messages.map((item) => {
                const own =
                  Boolean(voterToken) && item.voterToken === voterToken;
                const accent = accentColorForAuthor(
                  item.voterToken || item.authorName || item.id,
                );
                return (
                  <div
                    key={item.id}
                    className={`${styles.row} ${own ? styles.rowOwn : styles.rowOther}`}
                  >
                    <article
                      className={`${styles.bubble} ${own ? styles.bubbleOwn : styles.bubbleOther}`}
                    >
                      <p
                        className={styles.author}
                        style={{ color: own ? "var(--scheme-accent, #b07b3e)" : accent }}
                      >
                        {own ? "Tú" : item.authorName || "Anónimo"}
                      </p>
                      <p className={styles.body}>{item.message}</p>
                      <p className={styles.meta}>
                        <time
                          className={styles.time}
                          dateTime={item.createdAt}
                          title={formatRelativeTimeEs(item.createdAt, now)}
                        >
                          {formatClockTimeEs(item.createdAt)}
                        </time>
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>

            <form className={styles.composer} onSubmit={handleSubmit} noValidate>
              <div className={styles.composerTop}>
                <label className={styles.nickLabel} htmlFor="guestbook-name">
                  Apodo
                </label>
                <input
                  id="guestbook-name"
                  className={styles.nickInput}
                  name="authorName"
                  type="text"
                  autoComplete="nickname"
                  maxLength={GUESTBOOK_NAME_MAX}
                  placeholder="Tu nombre o apodo"
                  value={authorName}
                  disabled={!enabled || pending}
                  onChange={(event) =>
                    setAuthorName(
                      sanitizePlainTextInput(
                        event.target.value,
                        GUESTBOOK_NAME_MAX,
                      ),
                    )
                  }
                  required
                />
              </div>

              <div className={styles.composerRow}>
                <label className={styles.srOnly} htmlFor="guestbook-message">
                  Mensaje
                </label>
                <textarea
                  id="guestbook-message"
                  ref={messageInputRef}
                  className={styles.messageInput}
                  name="message"
                  rows={1}
                  maxLength={GUESTBOOK_MESSAGE_MAX}
                  placeholder="Escribe un mensaje… (Enter para enviar)"
                  value={message}
                  disabled={!enabled || pending}
                  onChange={(event) =>
                    setMessage(
                      sanitizePlainTextInput(
                        event.target.value,
                        GUESTBOOK_MESSAGE_MAX,
                      ),
                    )
                  }
                  onKeyDown={handleMessageKeyDown}
                  required
                />
                <button
                  type="submit"
                  className={styles.sendButton}
                  disabled={!canSubmit}
                  aria-label={
                    pending
                      ? "Enviando mensaje"
                      : cooldownSec > 0
                        ? `Espera ${cooldownSec} segundos`
                        : "Enviar mensaje"
                  }
                >
                  {pending ? "…" : cooldownSec > 0 ? cooldownSec : "↑"}
                </button>
              </div>

              <div className={styles.composerMeta}>
                <p
                  className={`${styles.charCount}${
                    remainingChars <= 20 ? ` ${styles.charCountWarn}` : ""
                  }`}
                  aria-live="polite"
                >
                  {remainingChars} caracteres
                </p>
                <p className={styles.hint}>
                  Enter envía · Shift+Enter salto de línea · 15s entre mensajes
                </p>
              </div>

              {error ? (
                <p className={`${styles.status} ${styles.statusError}`} role="alert">
                  {error}
                </p>
              ) : null}
            </form>

            {ownMessages.length > 0 ? (
              <div className={styles.manageOwn}>
                <button
                  type="button"
                  className={styles.manageOwnToggle}
                  aria-expanded={manageOwnOpen}
                  aria-controls="guestbook-own-messages"
                  onClick={() => setManageOwnOpen((open) => !open)}
                >
                  {manageOwnOpen
                    ? "Ocultar mis mensajes"
                    : `Borrar mis mensajes (${ownMessages.length})`}
                </button>

                {manageOwnOpen ? (
                  <ul
                    id="guestbook-own-messages"
                    className={styles.manageOwnList}
                  >
                    {[...ownMessages].reverse().map((item) => (
                      <li key={item.id} className={styles.manageOwnItem}>
                        <div className={styles.manageOwnCopy}>
                          <p className={styles.manageOwnText}>
                            {truncatePreview(item.message)}
                          </p>
                          <time
                            className={styles.manageOwnTime}
                            dateTime={item.createdAt}
                            title={formatRelativeTimeEs(item.createdAt, now)}
                          >
                            {formatClockTimeEs(item.createdAt)}
                          </time>
                        </div>
                        <button
                          type="button"
                          className={styles.deleteButton}
                          aria-label={`Borrar mensaje: ${truncatePreview(item.message, 40)}`}
                          disabled={deletingId === item.id || pending}
                          onClick={() => handleDeleteOwn(item.id)}
                        >
                          <span className={styles.deleteIcon} aria-hidden="true">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 2h4M2.5 4h11M12.5 4l-.5 9.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1L3.5 4M6.5 7v4.5M9.5 7v4.5"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>
                            {deletingId === item.id ? "Borrando…" : "Borrar"}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>

          <p className={styles.communityNote} role="note">
            <span className={styles.communityAccent} aria-hidden="true">
              ✦
            </span>
            Este es un espacio creado con cariño para celebrar el arte, felicitar
            al elenco y compartir tu emoción por 1903. Mantengamos siempre el
            respeto y la buena vibra; no se permiten insultos ni comentarios
            ofensivos.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
