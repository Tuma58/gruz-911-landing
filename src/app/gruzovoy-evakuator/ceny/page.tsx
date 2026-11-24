import Link from "next/link";
import { formatRub, site } from "@/data/site";

export const metadata = {
  title: "Цены на грузовую эвакуацию в Пензе | 911",
  description: "Прайс грузового эвакуатора 911: тягачи, фуры, спецтехника. Пенза и М5.",
};

export default function PricesPage() {
  return (
    <main className="container py-12">
      <Link href="/" className="text-sm text-accent">
        ← На лендинг
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Цены на грузовую эвакуацию</h1>
      <p className="mt-3 max-w-2xl text-text-muted">
        Тарифы с penza-evakuator.ru / приложения А к ТЗ. Перед публикацией подтверждает заказчик.
      </p>
      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {site.tariffs.map((row) => (
          <li key={row.code} className="rounded-[12px] border border-border bg-surface p-4">
            <p className="m-0 font-semibold">{row.name}</p>
            <p className="mt-2 text-accent">
              {typeof row.price === "number" ? formatRub(row.price) : `${row.price} ₽`} · {row.unit}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a href="tel:911911" className="font-bold text-accent">
          Позвонить 911-911
        </a>
      </p>
    </main>
  );
}
