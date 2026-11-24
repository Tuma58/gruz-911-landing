"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export function HeaderV2() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-4">
      <div className="container rounded-[999px] border border-border/80 bg-surface/90 px-3 py-2 shadow-[0_8px_30px_rgba(11,18,32,0.06)] backdrop-blur-md md:px-4">
        <div className="flex h-12 items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2 no-underline">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-contrast">
              911
            </span>
            <span className="hidden truncate sm:block">
              <span className="block text-sm font-bold leading-tight">{site.brandShort} · груз</span>
              <span className="block text-xs text-text-muted">24/7 · Пенза · М5</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Разделы">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-text-muted no-underline hover:bg-bg-subtle hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phones.shortTel}
              className="hidden font-display text-base font-bold text-text no-underline md:inline"
            >
              {site.phones.short}
            </a>
            <ButtonLink href={site.phones.shortTel} className="!min-h-10 !rounded-full px-4 text-sm">
              Позвонить
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-control lg:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
              <span aria-hidden className="text-lg leading-none">
                {open ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="container mt-2 rounded-[24px] border border-border bg-surface p-3 lg:hidden"
          role="dialog"
          aria-label="Мобильное меню"
        >
          <nav className="flex flex-col gap-1" aria-label="Мобильные разделы">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[16px] px-3 py-3 font-medium no-underline hover:bg-bg-subtle"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
