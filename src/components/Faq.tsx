"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border rounded-[12px] border border-border bg-surface">
      {site.faq.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.q}>
            <h3 className="m-0 text-base">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold hover:bg-surface-raised"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.q}
                <span aria-hidden className="text-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-4 text-text-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
