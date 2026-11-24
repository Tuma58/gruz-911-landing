import { formatRub, site } from "@/data/site";
import { Calculator } from "@/components/Calculator";
import { CookieBanner } from "@/components/CookieBanner";
import { Faq } from "@/components/Faq";
import { FleetForm } from "@/components/FleetForm";
import { GeoForm } from "@/components/GeoForm";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { HeaderV2 } from "./Header";
import { StickyBarV2 } from "./StickyBar";

export function LandingV2() {
  return (
    <div className="theme-v2 flex min-h-full flex-col">
      <a href="#main" className="skip-link">
        К содержимому
      </a>
      <VariantSwitcher active="v2" />
      <div id="top" />
      <HeaderV2 />
      <main id="main" className="pb-sticky flex-1">
        <Hero />
        <Why />
        <Services />
        <CalcSection />
        <Prices />
        <Onsite />
        <Repair />
        <Promos />
        <Fleet />
        <Placeholders />
        <Guarantees />
        <Reviews />
        <Zone />
        <FaqSection />
        <Contacts />
        <div className="container py-10">
          <GeoForm />
        </div>
      </main>
      <Footer />
      <StickyBarV2 />
      <CookieBanner />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-v2">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-16">
        <div className="fade-in">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-text px-3 py-1 text-xs font-bold text-text-inverse">
              24/7
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-success">
              ● Работаем сейчас
            </span>
            <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted">
              Пенза · М5
            </span>
          </div>
          <h1 className="font-display m-0 max-w-[14ch] text-[clamp(2rem,1.2rem+3.2vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.04em]">
            Грузовой эвакуатор.
            <span className="text-accent"> Без сюрпризов на месте.</span>
          </h1>
          <p className="mt-5 max-w-[36rem] text-lg text-text-muted">{site.hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={site.phones.shortTel} className="!rounded-full sm:min-w-[220px]">
              Позвонить {site.phones.short}
            </ButtonLink>
            <ButtonLink href="#geo" variant="secondary" className="!rounded-full">
              Отправить геопозицию
            </ButtonLink>
            <a href="#calc" className="text-sm font-bold text-text underline-offset-4 hover:underline">
              Калькулятор →
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.hero.theses.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm backdrop-blur"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(11,18,32,0.08)]">
          <p className="font-display m-0 text-xs font-bold tracking-[0.2em] text-text-muted uppercase">
            Быстрый вызов
          </p>
          <a
            href={site.phones.shortTel}
            className="font-display mt-3 block text-4xl font-bold tracking-tight text-accent no-underline"
          >
            {site.phones.short}
          </a>
          <a href={site.phones.freeTel} className="mt-1 block text-text-muted no-underline">
            {site.phones.freeDisplay}
          </a>
          <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-text-muted">
            <p className="m-0">{site.base.address}</p>
            <p className="m-0">{site.base.hours}</p>
            <p className="m-0">{site.hero.reply}</p>
          </div>
          <ButtonLink href="#geo" variant="secondary" className="mt-6 !rounded-full" fullWidth>
            Не можете говорить – гео
          </ButtonLink>
        </aside>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="section">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-lead">Цена, сроки и ремонт в одном контуре – без «дороже на месте».</p>
        <div className="grid gap-4 md:grid-cols-3">
          {site.why.map((item, i) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-border bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="font-display m-0 text-4xl font-bold text-accent/90">0{i + 1}</p>
              <h3 className="font-display mt-4 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-bg-subtle">
      <div className="container">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Что эвакуируем</h2>
            <p className="section-lead mb-0">Листайте карточки – или откройте сетку на широком экране.</p>
          </div>
          <ButtonLink href="#geo" className="!rounded-full">
            Вызвать
          </ButtonLink>
        </div>
        <div className="snap-row md:!grid md:!grid-cols-3 lg:!grid-cols-4">
          {site.services.map((s) => (
            <article
              key={s.id}
              className="flex min-h-[180px] flex-col rounded-[24px] border border-border bg-surface p-5"
            >
              <h3 className="font-display m-0 text-lg font-bold tracking-tight">{s.name}</h3>
              <p className="mt-auto pt-6 text-sm text-text-muted">
                от{" "}
                <span className="text-lg font-bold text-text">
                  {formatRub(s.priceFrom)}
                  {s.unit === "₽/км" ? "/км" : s.unit === "по Пензе" ? "" : ` ${s.unit}`}
                </span>
                {s.unit === "по Пензе" ? " по Пензе" : ""}
              </p>
              <ButtonLink href="#geo" variant="secondary" className="mt-4 !min-h-11 !rounded-full text-sm">
                Вызвать
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalcSection() {
  return (
    <section id="calc" className="section">
      <div className="container">
        <h2 className="section-title">Калькулятор за 30 секунд</h2>
        <p className="section-lead">Ориентир до звонка. Точную цену подтвердит диспетчер.</p>
        <Calculator />
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="price" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Открытый прайс</h2>
        <p className="section-lead">
          Тарифы с penza-evakuator.ru. Надбавка ночь/выходные – [ЗАПОЛНИТЬ].
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.tariffs.slice(0, 9).map((row) => (
            <article key={row.code} className="rounded-[24px] border border-border bg-surface p-5">
              <p className="m-0 text-sm text-text-muted">{row.unit}</p>
              <h3 className="mt-2 text-base font-bold">{row.name}</h3>
              <p className="font-display mt-4 text-2xl font-bold tracking-tight">
                {typeof row.price === "number" ? formatRub(row.price) : `${row.price} ₽`}
              </p>
            </article>
          ))}
        </div>
        <a
          href="/gruzovoy-evakuator/ceny/"
          className="mt-6 inline-flex font-bold text-accent underline-offset-4 hover:underline"
        >
          Полный прайс →
        </a>
      </div>
    </section>
  );
}

function Onsite() {
  return (
    <section id="onsite" className="section">
      <div className="container">
        <h2 className="section-title">Помощь на месте</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {site.onsite.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 rounded-[20px] bg-surface px-5 py-4 border border-border"
            >
              <span className="font-medium">{item.name}</span>
              <span className="shrink-0 font-bold text-accent">
                {item.priceFrom == null
                  ? "по запросу"
                  : `от ${formatRub(item.priceFrom)}${"note" in item && item.note ? ` (${item.note})` : ""}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Repair() {
  return (
    <section id="repair" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">С трассы – сразу в ремонт</h2>
        <p className="section-lead">
          ARSENAL: {site.arsenal.address}. Мойка 24/7 – {site.arsenal.wash}.
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6 md:overflow-visible">
          {site.repairSteps.map((step, i) => (
            <div
              key={step}
              className="min-w-[140px] rounded-[20px] border border-border bg-surface p-4 md:min-w-0"
            >
              <p className="font-display m-0 text-2xl font-bold text-accent">{i + 1}</p>
              <p className="mt-2 text-sm font-medium">{step}</p>
            </div>
          ))}
        </div>
        <ButtonLink href="#geo" className="mt-6 !rounded-full">
          Отправить фото на оценку
        </ButtonLink>
      </div>
    </section>
  );
}

function Promos() {
  return (
    <section id="promo" className="section">
      <div className="container">
        <h2 className="section-title">Акции</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {site.promos.map((p) => (
            <article
              key={p.title}
              className="rounded-[28px] border border-border bg-gradient-to-br from-surface to-bg-subtle p-6"
            >
              <h3 className="font-display m-0 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-text-muted">{p.text}</p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-text-muted uppercase">
                {p.until}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="section bg-bg-subtle">
      <div className="container grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <h2 className="section-title">Автопаркам</h2>
          <p className="section-lead">Договор, НДС, отсрочка, приоритет подачи.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {site.fleetPackages.map((pack) => (
              <article key={pack.name} className="rounded-[24px] border border-border bg-surface p-5">
                <h3 className="font-display m-0 text-lg font-bold">{pack.name}</h3>
                <p className="mt-1 text-sm text-accent">{pack.size}</p>
                <ul className="mt-4 space-y-2 pl-4 text-sm text-text-muted">
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

function Placeholders() {
  return (
    <section id="fleet-cars" className="section">
      <div className="container grid gap-4 md:grid-cols-2">
        <div className="rounded-[28px] border border-dashed border-border-control bg-surface p-6">
          <h2 className="section-title">Наши эвакуаторы</h2>
          <p className="m-0 text-text-muted">[ЗАПОЛНИТЬ: фото и ТТХ парка]</p>
        </div>
        <div id="cases" className="rounded-[28px] border border-dashed border-border-control bg-surface p-6">
          <h2 className="section-title">Кейсы</h2>
          <p className="m-0 text-text-muted">[ЗАПОЛНИТЬ: реальные эвакуации с согласия клиентов]</p>
        </div>
      </div>
    </section>
  );
}

function Guarantees() {
  return (
    <section id="guarantee" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Гарантии</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {site.guarantees.map((g) => (
            <li key={g} className="rounded-[20px] border border-border bg-surface px-5 py-4 font-medium">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="section-title">Отзывы</h2>
        <p className="section-lead">С penza-evakuator.ru · виджет Яндекс Карт – позже</p>
        <div className="grid gap-4 md:grid-cols-2">
          {site.reviews.map((r) => (
            <blockquote
              key={r.name}
              className="m-0 rounded-[28px] border border-border bg-surface p-6"
            >
              <p className="font-display m-0 text-xl leading-snug tracking-tight">«{r.text}»</p>
              <footer className="mt-5 text-sm font-bold text-text-muted">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zone() {
  return (
    <section id="zone" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Зона: Пенза, область, М5</h2>
        <div className="rounded-[28px] border border-dashed border-border-control bg-surface p-8 text-text-muted">
          Карта Яндекса (lazy) – [подключить API]. База: {site.base.address}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {site.citiesSample.map((c) => (
            <li key={c} className="rounded-full bg-surface px-3 py-1 text-sm border border-border">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
        <h2 className="section-title">FAQ</h2>
        <Faq />
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className="container overflow-hidden rounded-[32px] bg-text px-6 py-10 text-text-inverse md:px-10">
        <h2 className="font-display m-0 max-w-[16ch] text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-bold tracking-tight text-text-inverse">
          Сломались? Звоните {site.phones.short}
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={site.phones.shortTel} className="!rounded-full">
            Позвонить
          </ButtonLink>
          <ButtonLink
            href="#geo"
            variant="secondary"
            className="!rounded-full !border-white/30 !text-text-inverse hover:!bg-white/10"
          >
            Геопозиция
          </ButtonLink>
        </div>
        <dl className="mt-10 grid gap-4 text-sm text-white/70 md:grid-cols-3">
          <div>
            <dt className="text-white/50">Телефоны</dt>
            <dd className="m-0 mt-1 text-text-inverse">
              {site.phones.short} · {site.phones.freeDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-white/50">База</dt>
            <dd className="m-0 mt-1 text-text-inverse">{site.base.address}</dd>
          </div>
          <div>
            <dt className="text-white/50">ARSENAL</dt>
            <dd className="m-0 mt-1 text-text-inverse">{site.arsenal.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-border py-10 pb-28 md:pb-10">
      <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display m-0 text-lg font-bold">{site.brand}</p>
          <p className="mt-2 text-sm text-text-muted">
            {site.legal.name} · ИНН {site.legal.inn}
          </p>
          <p className="mt-1 text-sm text-text-muted">{site.legal.copyright}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="/privacy/" className="text-text-muted hover:text-accent">
            Политика ПДн
          </a>
          <a href="/soglasie/" className="text-text-muted hover:text-accent">
            Согласие на обработку ПДн
          </a>
          <a href={site.mainSite} className="text-text-muted hover:text-accent">
            penza-evakuator.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
