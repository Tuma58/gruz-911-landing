"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Button } from "./ui/Button";

type Status = "idle" | "locating" | "demo-ok" | "error";

export function GeoForm() {
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [coords, setCoords] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState("");
  const [cargo, setCargo] = useState("");
  const [issue, setIssue] = useState("");
  const [needRepair, setNeedRepair] = useState(false);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");

  function normalizePhone(value: string) {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) {
      return digits.slice(1);
    }
    return digits;
  }

  function requestGeo() {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { longitude, latitude, accuracy } = pos.coords;
        setCoords(`${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)} м)`);
        setPlace(
          `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=15`,
        );
        setStatus("idle");
      },
      () => {
        setStatus("error");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = normalizePhone(phone);
    if (digits.length !== 10) {
      setPhoneError("Введите 10 цифр номера без кода страны");
      return;
    }
    if (!consent) {
      setPhoneError("");
      setStatus("error");
      return;
    }
    setPhoneError("");
    setStatus("demo-ok");
  }

  return (
    <form
      id="geo"
      onSubmit={onSubmit}
      className="scroll-mt-[calc(var(--header-h)+12px)] rounded-[12px] border border-border bg-surface p-5 md:p-6"
      noValidate
    >
      <h3 className="m-0 text-xl font-bold">Отправить геопозицию</h3>
      <p className="mt-2 text-sm text-text-muted">
        Демо-форма: заявка никуда не уходит. В проде – Telegram диспетчерской, e-mail и CRM.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button type="button" onClick={requestGeo} disabled={status === "locating"}>
          {status === "locating" ? "Определяем…" : "Определить моё место"}
        </Button>
        {coords ? (
          <p className="self-center text-sm text-success">Координаты: {coords}</p>
        ) : null}
      </div>
      {status === "error" && !coords ? (
        <p className="mt-2 text-sm text-danger" role="alert">
          Не удалось получить геопозицию. Укажите ориентир вручную или позвоните{" "}
          <a href={site.phones.shortTel}>{site.phones.short}</a>.
        </p>
      ) : null}

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Где вы</span>
          <input
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3"
            placeholder="Например: М5, 640 км, в сторону Самары"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Телефон <span className="text-danger">*</span>
          </span>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(phoneError)}
            aria-describedby={phoneError ? "phone-error" : undefined}
          />
          {phoneError ? (
            <span id="phone-error" className="mt-1 block text-sm text-danger" role="alert">
              {phoneError}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Тип техники</span>
          <select
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="">Не выбран</option>
            {site.services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="mb-1.5 text-sm font-medium">Есть груз</legend>
          <div className="flex gap-4">
            {["Да", "Нет"].map((v) => (
              <label key={v} className="flex min-h-11 items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="cargo"
                  value={v}
                  checked={cargo === v}
                  onChange={() => setCargo(v)}
                />
                {v}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Что случилось</span>
          <select
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          >
            <option value="">Не выбрано</option>
            <option>Не заводится</option>
            <option>ДТП</option>
            <option>В кювете</option>
            <option>Сломана ходовая</option>
            <option>Другое</option>
          </select>
        </label>
      </div>

      <label className="mt-4 flex min-h-11 items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-accent"
          checked={needRepair}
          onChange={(e) => setNeedRepair(e.target.checked)}
        />
        Нужен ремонт после эвакуации (ARSENAL)
      </label>

      <label className="mt-3 flex min-h-11 items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-accent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>
          Согласен на обработку персональных данных.{" "}
          <a href="/privacy/" className="text-accent underline">
            Политика
          </a>{" "}
          и{" "}
          <a href="/soglasie/" className="text-accent underline">
            согласие
          </a>
          .
        </span>
      </label>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button type="submit" fullWidth>
          Отправить заявку
        </Button>
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={() => {
            window.location.href = site.phones.shortTel;
          }}
        >
          Позвонить {site.phones.short}
        </Button>
      </div>

      <div className="mt-3" aria-live="polite">
        {status === "demo-ok" ? (
          <p className="rounded-[8px] border border-border bg-bg-subtle px-3 py-2 text-sm">
            Демо: отправка не подключена. Если срочно – звоните{" "}
            <a href={site.phones.shortTel} className="font-bold text-accent">
              {site.phones.short}
            </a>
            .
          </p>
        ) : null}
        {status === "error" && consent === false ? (
          <p className="text-sm text-danger" role="alert">
            Отметьте согласие на обработку персональных данных.
          </p>
        ) : null}
      </div>
    </form>
  );
}
