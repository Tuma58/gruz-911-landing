import { formatRub, site } from "@/data/site";
import { Calculator } from "@/components/Calculator";
import { CookieBanner } from "@/components/CookieBanner";
import { Faq } from "@/components/Faq";
import { FleetForm } from "@/components/FleetForm";
import { GeoForm } from "@/components/GeoForm";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { HeaderV3 } from "./Header";
import { StickyBarV3 } from "./StickyBar";

export function LandingV3() {
  return (
    <div className="theme-v3 flex min-h-full flex-col bg-black text-white">
      <a href="#main" className="skip-link">
        К содержимому
      </a>
      <VariantSwitcher active="v3" />
      <div id="top" className="relative">
        <HeaderV3 />
        <main id="main" className="pb-sticky">
          <Hero />
          <MissionStrip />
          <ServicesPanel />
          <WhyPanel />
          <CalcPanel />
          <PricePanel />
          <RepairPanel />
          <FleetPanel />
          <ProofPanel />
          <FaqPanel />
          <FinalPanel />
          <div className="container border-t border-white/10 py-12">
            <GeoForm />
          </div>
        </main>
        <Footer />
      </div>
      <StickyBarV3 />
      <CookieBanner />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-v3">
      <div className="container relative z-[1] w-full pb-16 pt-28 md:pb-20">
        <p className="nav-caps m-0 text-white/60">Пенза · трасса М5 · 24/7</p>
        <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.5rem,1.4rem+5vw,5.5rem)] font-medium leading-[0.95]">
          Грузовой эвакуатор
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
          {site.hero.sub}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            href={site.phones.shortTel}
            className="!min-h-12 !rounded-none !px-8 !text-xs !tracking-[0.16em] uppercase"
          >
            Позвонить {site.phones.short}
          </ButtonLink>
          <ButtonLink
            href="#geo"
            variant="secondary"
            className="!min-h-12 !rounded-none !border-white/50 !px-8 !text-xs !tracking-[0.16em] uppercase hover:!bg-white/10"
          >
            Отправить геопозицию
          </ButtonLink>
          <a
            href="#calc"
            className="nav-caps inline-flex min-h-12 items-center text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Рассчитать стоимость
          </a>
        </div>
        <p className="mt-6 text-xs text-white/45">
          Фото техники для фона – [ЗАПОЛНИТЬ]. Сейчас cinematic-заглушка в духе dark void.
        </p>
      </div>
    </section>
  );
}

function MissionStrip() {
  return (
    <section id="why" className="border-t border-white/10 bg-black">
      <div className="container grid gap-0 md:grid-cols-3">
        {site.why.map((item, i) => (
          <article
            key={item.title}
            className="border-white/10 px-0 py-10 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <p className="nav-caps m-0 text-white/40">0{i + 1}</p>
            <h2 className="font-display mt-4 text-2xl font-medium">{item.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesPanel() {
  return (
    <section id="services" className="panel-v3">
      <div className="container relative z-[1] w-full py-16 md:py-20">
        <p className="nav-caps m-0 text-white/50">Vehicles</p>
        <h2 className="section-title mt-3">Что эвакуируем</h2>
        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {site.services.map((s, i) => (
            <li
              key={s.id}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-baseline gap-4">
                <span className="nav-caps text-white/35">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display m-0 text-xl font-medium md:text-2xl">{s.name}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <p className="m-0 text-sm text-white/55">
                  от {formatRub(s.priceFrom)}
                  {s.unit === "₽/км" ? "/км" : s.unit === "по Пензе" ? " по Пензе" : ` ${s.unit}`}
                </p>
                <a
                  href="#geo"
                  className="nav-caps text-white underline-offset-4 hover:underline"
                >
                  Вызвать
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyPanel() {
  return (
    <section id="onsite" className="border-t border-white/10 bg-black py-16 md:py-20">
      <div className="container">
        <p className="nav-caps m-0 text-white/50">On site</p>
        <h2 className="section-title mt-3">Помощь на месте</h2>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
          {site.onsite.map((item) => (
            <div key={item.name} className="flex justify-between gap-4 bg-black px-5 py-5">
              <span className="text-sm md:text-base">{item.name}</span>
              <span className="nav-caps shrink-0 text-white/70">
                {item.priceFrom == null
                  ? "по запросу"
                  : `от ${formatRub(item.priceFrom)}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalcPanel() {
  return (
    <section id="calc" className="border-t border-white/10 bg-[#050505] py-16 md:py-20">
      <div className="container">
        <p className="nav-caps m-0 text-white/50">Mission data</p>
        <h2 className="section-title mt-3">Калькулятор</h2>
        <p className="section-lead">Ориентир до выезда. Точную цену подтвердит диспетчер.</p>
        <Calculator />
      </div>
    </section>
  );
}

function PricePanel() {
  return (
    <section id="price" className="border-t border-white/10 bg-black py-16 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="nav-caps m-0 text-white/50">Pricing</p>
            <h2 className="section-title mt-3">Прайс</h2>
          </div>
          <a href="/gruzovoy-evakuator/ceny/" className="nav-caps text-white underline-offset-4 hover:underline">
            Полный список →
          </a>
        </div>
        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {site.tariffs.slice(0, 9).map((row) => (
            <article key={row.code} className="bg-black p-5">
              <p className="nav-caps m-0 text-white/40">{row.unit}</p>
              <h3 className="mt-3 text-base font-medium">{row.name}</h3>
              <p className="font-display mt-6 text-2xl font-medium">
                {typeof row.price === "number" ? formatRub(row.price) : `${row.price} ₽`}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepairPanel() {
  return (
    <section id="repair" className="panel-v3">
      <div className="container relative z-[1] w-full py-16 md:py-20">
        <p className="nav-caps m-0 text-white/50">Recovery → Repair</p>
        <h2 className="section-title mt-3">С трассы – в ARSENAL</h2>
        <p className="mt-4 max-w-2xl text-white/60">
          {site.arsenal.address}. {site.arsenal.hours}. Мойка: {site.arsenal.washHours}.
        </p>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.repairSteps.map((step, i) => (
            <li key={step} className="border border-white/15 bg-black/40 p-5 backdrop-blur-sm">
              <span className="nav-caps text-white/40">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display mt-3 text-lg font-medium">{step}</p>
            </li>
          ))}
        </ol>
        <ButtonLink
          href="#geo"
          className="mt-8 !rounded-none !text-xs !tracking-[0.16em] uppercase"
        >
          Отправить фото поломки
        </ButtonLink>
      </div>
    </section>
  );
}

function FleetPanel() {
  return (
    <section id="fleet" className="border-t border-white/10 bg-black py-16 md:py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="nav-caps m-0 text-white/50">Fleet contracts</p>
          <h2 className="section-title mt-3">Автопаркам</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {site.fleetPackages.map((pack) => (
              <article key={pack.name} className="border border-white/15 p-5">
                <h3 className="font-display m-0 text-xl font-medium">{pack.name}</h3>
                <p className="nav-caps mt-2 text-white/50">{pack.size}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <FleetForm />
      </div>
    </section>
  );
}

function ProofPanel() {
  return (
    <>
      <section id="promo" className="border-t border-white/10 bg-[#050505] py-16">
        <div className="container">
          <p className="nav-caps m-0 text-white/50">Updates</p>
          <h2 className="section-title mt-3">Акции</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {site.promos.map((p) => (
              <article key={p.title} className="border border-white/15 p-6">
                <h3 className="font-display m-0 text-xl font-medium">{p.title}</h3>
                <p className="mt-3 text-sm text-white/60">{p.text}</p>
                <p className="nav-caps mt-5 text-white/40">{p.until}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/10 bg-black py-16">
        <div className="container">
          <p className="nav-caps m-0 text-white/50">Telemetry</p>
          <h2 className="section-title mt-3">Отзывы</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {site.reviews.map((r) => (
              <blockquote key={r.name} className="m-0 border border-white/15 p-6">
                <p className="m-0 text-lg leading-snug text-white/90">«{r.text}»</p>
                <footer className="nav-caps mt-5 text-white/45">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantee" className="border-t border-white/10 bg-[#050505] py-16">
        <div className="container">
          <p className="nav-caps m-0 text-white/50">Assurance</p>
          <h2 className="section-title mt-3">Гарантии</h2>
          <ul className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2">
            {site.guarantees.map((g) => (
              <li key={g} className="bg-[#050505] px-5 py-4 text-sm">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="zone" className="border-t border-white/10 bg-black py-16">
        <div className="container">
          <p className="nav-caps m-0 text-white/50">Coverage</p>
          <h2 className="section-title mt-3">Пенза · область · М5</h2>
          <div className="mt-8 border border-dashed border-white/20 p-8 text-sm text-white/50">
            Карта Яндекса (lazy) – [подключить API]. База: {site.base.address}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.citiesSample.map((c) => (
              <li key={c} className="border border-white/15 px-3 py-1 text-xs tracking-wide uppercase">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fleet-cars" className="border-t border-white/10 bg-[#050505] py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          <div className="border border-dashed border-white/20 p-8">
            <h2 className="section-title">Парк</h2>
            <p className="m-0 text-white/50">[ЗАПОЛНИТЬ: фото и ТТХ эвакуаторов]</p>
          </div>
          <div id="cases" className="border border-dashed border-white/20 p-8">
            <h2 className="section-title">Кейсы</h2>
            <p className="m-0 text-white/50">[ЗАПОЛНИТЬ: реальные эвакуации]</p>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqPanel() {
  return (
    <section id="faq" className="border-t border-white/10 bg-black py-16">
      <div className="container max-w-3xl">
        <p className="nav-caps m-0 text-white/50">FAQ</p>
        <h2 className="section-title mt-3">Вопросы</h2>
        <div className="mt-8">
          <Faq />
        </div>
      </div>
    </section>
  );
}

function FinalPanel() {
  return (
    <section id="contacts" className="panel-v3 min-h-[60vh]">
      <div className="container relative z-[1] w-full py-20">
        <p className="nav-caps m-0 text-white/50">Contact</p>
        <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.25rem,1.2rem+4vw,4.5rem)] font-medium leading-[0.95]">
          Сломались? Звоните {site.phones.short}
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={site.phones.shortTel}
            className="!rounded-none !text-xs !tracking-[0.16em] uppercase"
          >
            Позвонить
          </ButtonLink>
          <ButtonLink
            href="#geo"
            variant="secondary"
            className="!rounded-none !border-white/50 !text-xs !tracking-[0.16em] uppercase hover:!bg-white/10"
          >
            Геопозиция
          </ButtonLink>
        </div>
        <dl className="mt-12 grid gap-6 text-sm text-white/55 md:grid-cols-3">
          <div>
            <dt className="nav-caps text-white/35">Телефоны</dt>
            <dd className="m-0 mt-2 text-white">
              {site.phones.short}
              <br />
              {site.phones.freeDisplay}
            </dd>
          </div>
          <div>
            <dt className="nav-caps text-white/35">База</dt>
            <dd className="m-0 mt-2 text-white">{site.base.address}</dd>
          </div>
          <div>
            <dt className="nav-caps text-white/35">ARSENAL</dt>
            <dd className="m-0 mt-2 text-white">{site.arsenal.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-black py-10 pb-28 md:pb-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display m-0 text-xl tracking-[0.2em]">{site.brandShort}</p>
          <p className="mt-3 text-xs text-white/45">
            {site.legal.name} · ИНН {site.legal.inn}
          </p>
          <p className="mt-1 text-xs text-white/45">{site.legal.copyright}</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href="/privacy/" className="nav-caps text-white/55 hover:text-white">
            Политика ПДн
          </a>
          <a href="/soglasie/" className="nav-caps text-white/55 hover:text-white">
            Согласие
          </a>
          <a href={site.mainSite} className="nav-caps text-white/55 hover:text-white">
            penza-evakuator.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
