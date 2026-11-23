import { Wine } from "lucide-react";
import { menuCities } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function MenuExperiencia() {
  return (
    <section id="menu" className="bg-stage px-5 py-14 text-parchment">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Menú y experiencia
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight">
          La mesa de 1903
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-parchment/80">
          Dos horas antes de la función, el mercado abre con cocina y bebidas
          de La Tapa del Coco, inspiradas en cada ciudad del recorrido.
        </p>

        <ul className="mt-8 space-y-3">
          {menuCities.map((item) => (
            <li key={item.city} className="border border-gold/30 px-4 py-4">
              <p className="font-display text-2xl text-gold">{item.city}</p>
              <p className="mt-1 text-sm leading-relaxed text-parchment/80">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-start gap-3 border border-gold/30 bg-ink px-4 py-4">
          <Wine className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <div>
            <p className="font-display text-2xl text-gold">Barra de época</p>
            <p className="mt-1 text-sm leading-relaxed text-parchment/80">
              Cócteles y bebidas temáticas para entrar al siglo XX antes de
              sentarte. Después de la función, el afterparty sigue en el mismo
              ambiente.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
