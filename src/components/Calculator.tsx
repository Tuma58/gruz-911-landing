"use client";

import { useMemo, useState } from "react";
import { formatRub, site } from "@/data/site";
import { Button } from "./ui/Button";

function roundUp500(n: number) {
  return Math.ceil(n / 500) * 500;
}

export function Calculator() {
  const [typeId, setTypeId] = useState<string>(site.calcTypes[0].id);
  const [supplyKm, setSupplyKm] = useState("15");
  const [haulKm, setHaulKm] = useState("20");
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [started, setStarted] = useState(false);

  const type = site.calcTypes.find((t) => t.id === typeId) ?? site.calcTypes[0];

  const result = useMemo(() => {
    const supply = Math.max(0, Number(supplyKm) || 0);
    const haul = Math.max(0, Number(haulKm) || 0);
    let total = 0;
    let note = "";

    if (type.mode === "fixed") {
      total = type.rate;
      note = "Фиксированный тариф по Пензе. Километры за городом считаются отдельно у диспетчера.";
    } else {
      const deadheadRate = 160;
      const deadhead = supply * deadheadRate;
      const haulCost = haul * type.rate;
      total = deadhead + haulCost;
      note = `Подача ${supply} км × ${deadheadRate} ₽ + перевозка ${haul} км × ${type.rate} ₽`;
    }

    for (const ex of site.extras) {
      if (extras[ex.id]) total += ex.price;
    }

    const approx = roundUp500(total);
    return { total, approx, note };
  }, [type, supplyKm, haulKm, extras]);

  return (
    <div className="rounded-[12px] border border-border bg-surface p-5 md:p-6">
      <p className="mb-4 rounded-[8px] border border-border bg-bg-subtle px-3 py-2 text-sm text-text-muted">
        Демо-калькулятор: маршруты Яндекса не подключены. Введите километры вручную. Точную цену
        подтвердит диспетчер.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Тип техники</span>
          <select
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3 text-text"
            value={typeId}
            onChange={(e) => {
              setStarted(true);
              setTypeId(e.target.value);
            }}
          >
            {site.calcTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Подача от базы, км</span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3 text-text"
            value={supplyKm}
            onChange={(e) => {
              setStarted(true);
              setSupplyKm(e.target.value);
            }}
            disabled={type.mode === "fixed"}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Перевозка «откуда → куда», км</span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            className="min-h-12 w-full rounded-[8px] border border-border-control bg-bg px-3 text-text"
            value={haulKm}
            onChange={(e) => {
              setStarted(true);
              setHaulKm(e.target.value);
            }}
            disabled={type.mode === "fixed"}
          />
        </label>

        <fieldset className="block">
          <legend className="mb-1.5 text-sm font-medium">Дополнительно</legend>
          <div className="flex flex-col gap-2">
            {site.extras.map((ex) => (
              <label key={ex.id} className="flex min-h-11 items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-accent"
                  checked={Boolean(extras[ex.id])}
                  onChange={(e) => {
                    setStarted(true);
                    setExtras((prev) => ({ ...prev, [ex.id]: e.target.checked }));
                  }}
                />
                {ex.label} ({formatRub(ex.price)}
                {ex.id === "ditch" ? ", окончательно после осмотра" : ""})
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 rounded-[12px] bg-bg-subtle p-4" aria-live="polite">
        <p className="text-sm text-text-muted">{result.note}</p>
        <p className="mt-2 text-3xl font-bold tracking-tight">≈ {formatRub(result.approx)}</p>
        <p className="mt-1 text-sm text-text-muted">
          Ориентировочная цена (округлено до 500 ₽ вверх). Точную стоимость диспетчер назовёт до
          выезда и пришлёт в мессенджер.
        </p>
        {started ? (
          <p className="mt-2 text-xs text-text-muted">Событие calc_result (демо, без Метрики)</p>
        ) : null}
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button
          type="button"
          fullWidth
          onClick={() => {
            document.getElementById("geo")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Подтвердить цену у диспетчера
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
    </div>
  );
}
