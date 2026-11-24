"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/data/site";

export function HeaderV3() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-lg font-medium tracking-[0.2em] no-underline">
          911
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Разделы">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-caps text-white/80 no-underline hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phones.shortTel} className="nav-caps hidden text-white no-underline sm:inline">
            {site.phones.short}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/40 xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id={panelId} className="border-t border-white/10 bg-black/95 xl:hidden" role="dialog">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Мобильные разделы">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-caps py-3 text-white/85 no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={site.phones.shortTel} className="nav-caps py-3 text-white no-underline">
              Позвонить {site.phones.short}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
