"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Button } from "./ui/Button";

export function FleetForm() {
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("1–5");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "demo-ok" | "error">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || !consent) {
      setStatus("error");
      return;
    }
    setStatus("demo-ok");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[12px] border border-border bg-bg-subtle p-5"
      noValidate
    >
      <h3 className="m-0 text-lg font-bold">Получить договор и тарифы</h3>
      <p className="mt-1 text-sm text-text-muted">Демо-форма: отправка не подключена.</p>

      <div className="mt-4 grid gap-3">
        <label className="block">
          <span className="mb-1 block text-sm">Имя</span>
          <input className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm">Компания</span>
          <input className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm">
            Телефон <span className="text-danger">*</span>
          </span>
          <input
            type="tel"
            required
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <fieldset>
          <legend className="mb-1 text-sm">Размер парка</legend>
          <div className="flex flex-wrap gap-2">
            {["1–5", "6–20", "20+"].map((v) => (
              <button
                key={v}
                type="button"
                className={[
                  "min-h-11 rounded-[8px] border px-3 text-sm font-medium",
                  size === v
                    ? "border-accent bg-accent text-accent-contrast"
                    : "border-border-control bg-bg",
                ].join(" ")}
                onClick={() => setSize(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1 accent-accent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          Согласен на обработку ПДн (
          <a href="/soglasie/" className="text-accent underline">
            согласие
          </a>
          )
        </label>
      </div>

      <Button type="submit" className="mt-4" fullWidth>
        Получить условия
      </Button>

      <div className="mt-3" aria-live="polite">
        {status === "demo-ok" ? (
          <p className="text-sm">Демо: заявка для автопарков не отправлена. Звоните {site.phones.short}.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-danger" role="alert">
            Укажите телефон и отметьте согласие.
          </p>
        ) : null}
      </div>
    </form>
  );
}
