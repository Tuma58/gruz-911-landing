"use client";

import { useEffect, useId, useState } from "react";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="container flex h-[56px] items-center justify-between gap-3 lg:h-[72px]">
        <a href="#top" className="flex min-w-0 items-center gap-2 no-underline">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-accent font-bold text-accent-contrast">
            911
          </span>
          <span className="truncate">
            <span className="block text-sm font-bold leading-tight">{site.brand}</span>
            <span className="block text-xs text-text-muted">{site.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Разделы">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-2.5 py-2 text-sm text-text-muted no-underline hover:bg-surface hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden text-right sm:block">
            <a
              href={site.phones.shortTel}
              className="block text-base font-bold text-accent no-underline hover:text-accent-hover"
            >
              {site.phones.short}
            </a>
            <a
              href={site.phones.freeTel}
              className="block text-xs text-text-muted no-underline hover:text-text"
            >
              {site.phones.freeDisplay}
            </a>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-success md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
            Работаем сейчас
          </span>
          <a
            href={site.phones.shortTel}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-accent text-accent-contrast sm:hidden"
            aria-label={`Позвонить ${site.phones.short}`}
          >
            <PhoneIcon />
          </a>
          <ButtonLink href={site.phones.shortTel} className="hidden sm:inline-flex">
            Позвонить
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-border-control xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="border-t border-border bg-surface xl:hidden"
          role="dialog"
          aria-label="Мобильное меню"
        >
          <nav className="container flex flex-col gap-1 py-4" aria-label="Мобильные разделы">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-base font-medium no-underline hover:bg-surface-raised"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phones.freeTel}
              className="mt-2 rounded-[8px] px-3 py-3 text-text-muted no-underline"
            >
              {site.phones.freeDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
