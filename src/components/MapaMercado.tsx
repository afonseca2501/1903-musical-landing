"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { accesses, zones } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function MapaMercado() {
  const [active, setActive] = useState<string>("1");
  const access = accesses.find((item) => item.id === active);
  const zone = zones.find((item) => item.id === active);
  const title = access?.label ?? `Zona ${zone?.label ?? active}`;

  return (
    <section id="mapa" className="bg-ink px-5 py-14 text-parchment">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Mapa del mercado
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight">
          El recorrido, puesto por puesto
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-parchment/80">
          Toca una zona o un acceso para ubicarte en el mercado. El plano
          detallado de cada puesto se completa con la producción.
        </p>

        <div className="mt-8 grid grid-cols-4 gap-2">
          {zones.map((item) => {
            const selected = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-pressed={selected}
                className={`flex min-h-14 items-center justify-center border font-display text-lg transition-colors ${
                  selected
                    ? "border-gold bg-gold text-stage"
                    : "border-gold/40 bg-stage text-gold"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {accesses.map((item) => {
            const selected = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-pressed={selected}
                className={`min-h-12 border text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                  selected
                    ? "border-gold bg-gold text-stage"
                    : "border-gold/40 text-parchment"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-start gap-3 border border-gold/30 bg-stage px-4 py-4">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <div>
            <p className="font-display text-2xl text-gold">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-parchment/75">
              Parte del mercado inmersivo en Islas de Atlapa. Aquí el público
              entra a la época antes de la función.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
