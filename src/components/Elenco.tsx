"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cast, ficha, leads } from "@/data/content";
import { Reveal } from "@/components/Reveal";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-stage/15">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left"
      >
        <span className="font-display text-2xl">{title}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-gold-aged transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Elenco() {
  return (
    <section id="elenco" className="bg-parchment px-5 py-14 text-stage">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-aged">
          Ficha técnica y elenco
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight">
          Quiénes dan vida a 1903
        </h2>

        <ul className="mt-8 space-y-3">
          {leads.map((person) => (
            <li
              key={person.name}
              className="border border-gold/50 bg-stage px-4 py-4 text-parchment"
            >
              <p className="font-display text-2xl leading-tight">{person.name}</p>
              <p className="mt-1 text-sm text-parchment/75">{person.role}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Accordion title="Elenco">
            <ul className="space-y-3">
              {cast.map((person) => (
                <li key={person.name} className="flex flex-col">
                  <span className="font-medium">{person.name}</span>
                  <span className="text-sm text-stage/70">{person.role}</span>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="Ficha técnica">
            <dl className="space-y-4">
              {ficha.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-aged">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
