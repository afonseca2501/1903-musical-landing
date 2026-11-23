import { sponsors } from "@/data/content";

export function Footer() {
  return (
    <footer id="patrocinadores" className="bg-ink px-5 py-14 text-parchment">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        Patrocinadores
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3">
        {sponsors.map((name) => (
          <li
            key={name}
            className="flex min-h-16 items-center justify-center border border-gold/30 px-4 text-center font-display text-lg text-gold"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-xs leading-relaxed tracking-wide text-parchment/60">
        © 2026 Stardust Entertainment.
        <br />
        1903: El Musical Inmersivo · Islas de Atlapa
      </p>
    </footer>
  );
}
