"use client";

import { useState } from "react";
import { MAP_GUIDE_ITEMS } from "@/lib/map-guide";
import { isMapGateCode, parseLeadingMapCode } from "@/lib/map-legend";
import styles from "./map-guide-accordion.module.css";

function MapCodeBadge({ code }: { code: string }) {
  return (
    <span
      className={`${styles.code} ${isMapGateCode(code) ? styles.codeGate : styles.codePoint}`}
    >
      {code}
    </span>
  );
}

export function MapGuideAccordion() {
  const [openId, setOpenId] = useState<string | null>(
    MAP_GUIDE_ITEMS[0]?.id ?? null,
  );

  return (
    <div className={styles.root}>
      {MAP_GUIDE_ITEMS.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={`map-guide-panel-${item.id}`}
              id={`map-guide-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className={styles.title}>{item.title}</span>
              <span
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            <div
              id={`map-guide-panel-${item.id}`}
              role="region"
              aria-labelledby={`map-guide-trigger-${item.id}`}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
              aria-hidden={!isOpen}
            >
              <div className={styles.panelInner}>
                <div className={styles.panelContent}>
                  {item.lead ? <p className={styles.lead}>{item.lead}</p> : null}

                  {item.blocks.map((block, index) => {
                    const parsed = block.label
                      ? parseLeadingMapCode(block.label)
                      : null;

                    return (
                      <div
                        key={`${item.id}-block-${index}`}
                        className={styles.block}
                      >
                        {block.label ? (
                          <div className={styles.blockLabelRow}>
                            {parsed ? (
                              <MapCodeBadge code={parsed.code} />
                            ) : null}
                            <p className={styles.blockLabel}>
                              {parsed ? parsed.rest : block.label}
                            </p>
                          </div>
                        ) : null}
                        <p className={styles.blockText}>{block.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
