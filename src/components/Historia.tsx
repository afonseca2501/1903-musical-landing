import { historia } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Historia() {
  return (
    <section id="historia" className="bg-parchment px-5 py-14 text-stage">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-aged">
          {historia.kicker}
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-stage">
          {historia.title}
        </h2>
        <div className="mt-4 h-px w-16 bg-gold" />
        <div className="mt-6 space-y-4 text-base leading-relaxed">
          {historia.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-stage/75">
          {historia.credits}
        </p>
      </Reveal>
    </section>
  );
}
