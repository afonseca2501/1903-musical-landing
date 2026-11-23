import { Ticket } from "lucide-react";
import { TICKETS_URL, nav } from "@/data/content";

export function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-b border-gold/25 bg-stage/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3">
        <a
          href="#inicio"
          className="font-display text-xl tracking-[0.22em] text-gold"
        >
          {nav.brand}
        </a>
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-xs font-semibold uppercase tracking-[0.16em] text-stage transition-colors hover:bg-gold-aged"
        >
          <Ticket className="size-4" aria-hidden />
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
