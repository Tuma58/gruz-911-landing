import Link from "next/link";

export default function Home() {
  return (
    <main className="theme-v3 flex min-h-full flex-col bg-black text-white">
      <div className="container flex flex-1 flex-col justify-center py-16">
        <p className="nav-caps m-0 text-white/50">911 · грузовая эвакуация</p>
        <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2rem,1.2rem+3vw,3.5rem)] font-medium leading-[1.02]">
          Три варианта макета
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/60">
          Один контент и одни контакты из ТЗ. Разная визуальная система – сравните и выберите
          направление для доработки.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/v1"
            className="group border border-white/15 bg-[#12151a] p-6 text-white no-underline transition-colors hover:border-white/40"
          >
            <p className="nav-caps m-0 text-[#facc15]">Вариант 1</p>
            <h2 className="mt-3 text-xl font-bold">Ночной диспетчер</h2>
            <p className="mt-3 text-sm text-white/60">
              Тёмный графит, сигнальный жёлтый, техническая плотность.
            </p>
            <span className="mt-6 inline-flex text-sm font-bold text-[#facc15] group-hover:underline">
              Открыть →
            </span>
          </Link>

          <Link
            href="/v2"
            className="group border border-white/15 bg-white p-6 text-black no-underline transition-colors hover:border-black/40"
          >
            <p className="nav-caps m-0 text-[#b91c1c]">Вариант 2</p>
            <h2 className="font-display mt-3 text-xl font-bold tracking-tight normal-case">
              Свежий сигнал
            </h2>
            <p className="mt-3 text-sm text-black/60">
              Светлый cool mist, coral, Unbounded, pill-навигация.
            </p>
            <span className="mt-6 inline-flex text-sm font-bold text-[#b91c1c] group-hover:underline">
              Открыть →
            </span>
          </Link>

          <Link
            href="/v3"
            className="group border border-white/15 bg-black p-6 text-white no-underline transition-colors hover:border-white/50"
          >
            <p className="nav-caps m-0 text-white/50">Вариант 3</p>
            <h2 className="font-display mt-3 text-xl font-medium">Launch black</h2>
            <p className="mt-3 text-sm text-white/60">
              SpaceX-like: void black, uppercase, full-bleed панели, белый CTA.
            </p>
            <span className="nav-caps mt-6 inline-flex text-white group-hover:underline">
              Открыть →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
