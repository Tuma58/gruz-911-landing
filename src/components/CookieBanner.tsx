"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const KEY = "911-gruz-cookie-ok";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-[calc(var(--sticky-h)+0.5rem)] z-40 px-3 md:bottom-4 md:left-auto md:right-4 md:max-w-md">
      <div className="rounded-[12px] border border-border bg-surface p-4 shadow-none">
        <p className="m-0 text-sm text-text-muted">
          Используем cookie и Яндекс Метрику для работы сайта и аналитики.{" "}
          <a href="/privacy/" className="text-accent underline">
            Политика
          </a>
        </p>
        <Button
          type="button"
          className="mt-3"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          Понятно
        </Button>
      </div>
    </div>
  );
}
