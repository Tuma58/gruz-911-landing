import { formatRub, site } from "@/data/site";
import { Calculator } from "@/components/Calculator";
import { CookieBanner } from "@/components/CookieBanner";
import { Faq } from "@/components/Faq";
import { FleetForm } from "@/components/FleetForm";
import { GeoForm } from "@/components/GeoForm";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { Header } from "./Header";
import { StickyBar } from "./StickyBar";

export function LandingV1() {
  return (
    <div className="theme-v1 flex min-h-full flex-col bg-bg text-text">
      <a href="#main" className="skip-link">
        К содержимому
      </a>
      <VariantSwitcher active="v1" />
      <Header />
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
        <FleetCarsPlaceholder />
        <CasesPlaceholder />
        <Guarantees />
        <Reviews />
        <DriverHelp />
        <Zone />
        <FaqSection />
        <Contacts />
        <div className="container py-10">
          <GeoForm />
        </div>
      </main>
      <Footer />
      <StickyBar />
      <CookieBanner />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-grid relative overflow-hidden">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
        <div className="fade-in">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-success">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
            Работаем сейчас · 24/7
          </p>
          <h1 className="m-0 max-w-[18ch] text-[clamp(1.75rem,1.2rem+2.2vw,3rem)] font-bold leading-[1.1] tracking-tight">
            {site.hero.h1}
          </h1>
          <p className="mt-4 max-w-[42rem] text-lg text-text-muted">{site.hero.sub}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {site.hero.theses.map((t) => (
              <li
                key={t}
                className="rounded-[8px] border border-border bg-surface/60 px-3 py-3 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={site.phones.shortTel} fullWidth className="sm:w-auto">
              Позвонить {site.phones.short}
            </ButtonLink>
            <ButtonLink href="#geo" variant="secondary" fullWidth className="sm:w-auto">
              Отправить геопозицию
            </ButtonLink>
            <a
              href="#calc"
              className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Рассчитать стоимость
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted">{site.hero.reply}</p>
          <p className="mt-6 text-xs text-text-muted">
            Фото грузового эвакуатора для фона – [ЗАПОЛНИТЬ: реальное фото от заказчика]. Сейчас
            технический фон-заглушка.
          </p>
        </div>
        <aside className="rounded-[12px] border border-border bg-surface/80 p-5 backdrop-blur-sm">
          <p className="m-0 text-sm text-text-muted">Быстрый вызов</p>
          <a
            href={site.phones.shortTel}
            className="mt-2 block text-3xl font-bold text-accent no-underline"
          >
            {site.phones.short}
          </a>
          <a
            href={site.phones.freeTel}
            className="mt-1 block text-base text-text-muted no-underline hover:text-text"
          >
            {site.phones.freeDisplay} · бесплатно
          </a>
          <p className="mt-4 text-sm text-text-muted">{site.base.address}</p>
          <p className="mt-1 text-sm text-text-muted">{site.base.hours}</p>
          <ButtonLink href="#geo" variant="secondary" className="mt-5" fullWidth>
            Не можете говорить – геопозиция
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
        <p className="section-lead">Снимаем главные страхи: цена, сроки, документы и ремонт.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {site.why.map((item, i) => (
            <article
              key={item.title}
              className="rounded-[12px] border border-border bg-surface p-5"
            >
              <p className="m-0 text-sm font-bold text-accent">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-text-muted">{item.text}</p>
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
        <h2 className="section-title">Эвакуируем любую грузовую технику</h2>
        <p className="section-lead">Цена «от» – по тарифам с penza-evakuator.ru. Точную сумму скажет диспетчер.</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {site.services.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-[12px] border border-border bg-surface p-4"
            >
              <h3 className="m-0 text-base font-bold leading-snug">{s.name}</h3>
              <p className="mt-2 text-sm text-text-muted">
                от {formatRub(s.priceFrom)}
                {s.unit === "₽/км" ? "/км" : s.unit === "по Пензе" ? " по Пензе" : ` ${s.unit}`}
              </p>
              <div className="mt-auto flex flex-col gap-2 pt-4">
                <ButtonLink href="#geo" className="min-h-11 text-sm">
                  Вызвать
                </ButtonLink>
                {s.slug ? (
                  <a
                    href={`/gruzovoy-evakuator/${s.slug}/`}
                    className="text-center text-sm text-text-muted underline-offset-2 hover:text-accent hover:underline"
                  >
                    Подробнее
                  </a>
                ) : null}
              </div>
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
        <h2 className="section-title">Сколько стоит эвакуация – посчитайте за 30 секунд</h2>
        <p className="section-lead">
          Это ориентировочная цена. Точную стоимость диспетчер назовёт до выезда и пришлёт в
          мессенджер.
        </p>
        <Calculator />
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="price" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Прозрачные цены на грузовую эвакуацию</h2>
        <p className="section-lead">
          Цена = вызов + километры. Надбавка ночь/выходные – [ЗАПОЛНИТЬ: без надбавок или +N%].
        </p>
        <p className="mb-6 rounded-[8px] border border-border bg-surface px-4 py-3 text-sm">
          Пример: тягач без прицепа, 40 км до сервиса ≈ подача + 40 × 200 ₽. Точный расчёт – в
          калькуляторе или у диспетчера.
        </p>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-text-muted">
                <th className="px-3 py-3 font-medium">Услуга</th>
                <th className="px-3 py-3 font-medium">Ед.</th>
                <th className="px-3 py-3 font-medium">Цена</th>
              </tr>
            </thead>
            <tbody>
              {site.tariffs.map((row) => (
                <tr key={row.code} className="border-b border-border">
                  <td className="px-3 py-3">{row.name}</td>
                  <td className="px-3 py-3 text-text-muted">{row.unit}</td>
                  <td className="px-3 py-3 font-semibold">
                    {typeof row.price === "number" ? formatRub(row.price) : `${row.price} ₽`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 md:hidden">
          {site.tariffs.map((row) => (
            <article key={row.code} className="rounded-[12px] border border-border bg-surface p-4">
              <h3 className="m-0 text-base font-semibold">{row.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{row.unit}</p>
              <p className="mt-1 text-lg font-bold">
                {typeof row.price === "number" ? formatRub(row.price) : `${row.price} ₽`}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-text-muted">
          Полный прайс и PDF для бухгалтерии – на{" "}
          <a href="/gruzovoy-evakuator/ceny/" className="text-accent underline">
            странице цен
          </a>{" "}
          (шаблон SEO-раздела).
        </p>
      </div>
    </section>
  );
}

function Onsite() {
  return (
    <section id="onsite" className="section">
      <div className="container">
        <h2 className="section-title">Иногда достаточно помощи на месте</h2>
        <p className="section-lead">Не всегда нужна эвакуация – сначала оценим ситуацию.</p>
        <ul className="grid gap-3 md:grid-cols-2">
          {site.onsite.map((item) => (
            <li
              key={item.name}
              className="flex items-start justify-between gap-4 rounded-[12px] border border-border bg-surface px-4 py-4"
            >
              <span>{item.name}</span>
              <span className="shrink-0 font-bold text-accent">
                {item.priceFrom == null
                  ? "по запросу"
                  : `от ${formatRub(item.priceFrom)}${"note" in item && item.note ? ` (${item.note})` : ""}`}
              </span>
            </li>
          ))}
        </ul>
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
          Партнёрский грузовой сервис ARSENAL: слесарный и кузовной ремонт, рефрижераторы, прицепы и
          фургоны, мойка 24/7. Оценим ремонт по фото ещё до эвакуации.
        </p>
        <ol className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {site.repairSteps.map((step, i) => (
            <li
              key={step}
              className="rounded-[12px] border border-border bg-surface p-4 text-sm font-medium"
            >
              <span className="block text-accent">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-text-muted">
          {site.arsenal.name}: {site.arsenal.address} · {site.arsenal.hours}. Мойка:{" "}
          {site.arsenal.wash}, {site.arsenal.washHours}.{" "}
          <a href={site.arsenal.url} className="text-accent underline" rel="noopener noreferrer">
            arsenal058.ru
          </a>
        </p>
        <ButtonLink href="#geo" className="mt-6">
          Отправить фото поломки на оценку
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
        <p className="section-lead">Условия и сроки – [ЗАПОЛНИТЬ заказчиком]. Без обещаний «лучший/самый дешёвый».</p>
        <div className="grid gap-4 md:grid-cols-2">
          {site.promos.map((p) => (
            <article key={p.title} className="rounded-[12px] border border-border bg-surface p-5">
              <h3 className="m-0 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-text-muted">{p.text}</p>
              <p className="mt-3 text-xs text-text-muted">Срок: {p.until}</p>
              <ButtonLink href={site.phones.shortTel} className="mt-4 text-sm">
                Позвонить
              </ButtonLink>
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
      <div className="container">
        <h2 className="section-title">Для транспортных компаний и автопарков</h2>
        <p className="section-lead">
          Договор · НДС · фиксированный тариф · приоритетная подача · отсрочка · отчёты.
        </p>
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {site.fleetPackages.map((pack) => (
              <article key={pack.name} className="rounded-[12px] border border-border bg-surface p-5">
                <h3 className="m-0 text-lg font-bold">{pack.name}</h3>
                <p className="mt-1 text-sm text-accent">{pack.size}</p>
                <ul className="mt-4 space-y-2 pl-4 text-sm text-text-muted">
                  {pack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <FleetForm />
        </div>
      </div>
    </section>
  );
}

function FleetCarsPlaceholder() {
  return (
    <section id="fleet-cars" className="section">
      <div className="container">
        <h2 className="section-title">Наши эвакуаторы</h2>
        <p className="section-lead">
          [ЗАПОЛНИТЬ: список машин с характеристиками и фото]. Карточки появятся после передачи
          данных заказчиком.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {["Сдвижная платформа", "Частичная погрузка", "Тяжёлый эвакуатор"].map((t) => (
            <div
              key={t}
              className="flex aspect-[4/3] items-end rounded-[12px] border border-dashed border-border-control bg-surface p-4 text-sm text-text-muted"
            >
              {t} – фото и ТТХ [заменить]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesPlaceholder() {
  return (
    <section id="cases" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Последние эвакуации</h2>
        <p className="section-lead">
          Кейсы публикуются только с согласия клиента. Сейчас – шаблон из ТЗ (данные условные).
        </p>
        <article className="rounded-[12px] border border-border bg-surface p-5">
          <h3 className="m-0 text-lg font-bold">
            [заменить] Тягач с гружёным рефрижератором, М5
          </h3>
          <p className="mt-3 text-text-muted">
            Ситуация, подача, маршрут и итог ремонта – после передачи реальных кейсов. Госномера на
            фото размываются.
          </p>
        </article>
      </div>
    </section>
  );
}

function Guarantees() {
  return (
    <section id="guarantee" className="section">
      <div className="container">
        <h2 className="section-title">Гарантии и документы</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {site.guarantees.map((g) => (
            <li key={g} className="rounded-[12px] border border-border bg-surface px-4 py-4">
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
    <section id="reviews" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Отзывы клиентов</h2>
        <p className="section-lead">
          Тексты с penza-evakuator.ru. Виджет Яндекс Карт – [ЗАПОЛНИТЬ: ссылка на карточку].
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {site.reviews.map((r) => (
            <blockquote
              key={r.name}
              className="m-0 rounded-[12px] border border-border bg-surface p-5"
            >
              <p className="m-0 text-text">«{r.text}»</p>
              <footer className="mt-4 text-sm font-semibold text-text-muted">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function DriverHelp() {
  return (
    <section id="driver" className="section">
      <div className="container max-w-3xl">
        <h2 className="section-title">Пока машина в ремонте</h2>
        <p className="section-lead">
          Подождать можно на грузовой мойке ARSENAL ({site.arsenal.washHours}, {site.arsenal.wash}).
          Подскажем, где поесть и переночевать рядом, вызовем такси. Партнёры – [ЗАПОЛНИТЬ].
        </p>
      </div>
    </section>
  );
}

function Zone() {
  return (
    <section id="zone" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Работаем в Пензе, области и на трассе М5</h2>
        <p className="section-lead">
          Участок М5 – [ЗАПОЛНИТЬ: от–до км]. Межгород по России – по заявке, до 700 км на условиях
          акции.
        </p>
        <div className="rounded-[12px] border border-dashed border-border-control bg-surface p-6 text-sm text-text-muted">
          Карта Яндекса подгружается при прокрутке до блока (lazy) – [подключить ключ API]. База:{" "}
          {site.base.address}.
        </div>
        <p className="mt-4 text-sm font-medium">Населённые пункты области (фрагмент):</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {site.citiesSample.map((c) => (
            <li key={c} className="rounded-full border border-border px-3 py-1 text-sm">
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-text-muted">Полный список – как на основном сайте, по кнопке в следующей итерации.</p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
        <h2 className="section-title">Частые вопросы</h2>
        <p className="section-lead">Ответы из ТЗ. Пункты с [ЗАПОЛНИТЬ] уточнит заказчик.</p>
        <Faq />
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="section bg-bg-subtle">
      <div className="container">
        <h2 className="section-title">Сломались? Звоните {site.phones.short} – приедем</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={site.phones.shortTel}>Позвонить</ButtonLink>
          <ButtonLink href="#geo" variant="secondary">
            Отправить геопозицию
          </ButtonLink>
          <span className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-border px-5 text-sm text-text-muted">
            Telegram [ЗАПОЛНИТЬ: ссылка]
          </span>
          <span className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-border px-5 text-sm text-text-muted">
            MAX [ЗАПОЛНИТЬ: ссылка]
          </span>
        </div>
        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[12px] border border-border bg-surface p-4">
            <dt className="text-sm text-text-muted">Телефоны</dt>
            <dd className="m-0 mt-2">
              <a href={site.phones.shortTel} className="block font-bold text-accent">
                {site.phones.short}
              </a>
              <a href={site.phones.freeTel} className="block">
                {site.phones.freeDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="rounded-[12px] border border-border bg-surface p-4">
            <dt className="text-sm text-text-muted">База эвакуации</dt>
            <dd className="m-0 mt-2">
              {site.base.address}
              <br />
              {site.base.hours}
            </dd>
          </div>
          <div className="rounded-[12px] border border-border bg-surface p-4">
            <dt className="text-sm text-text-muted">Сервис ARSENAL</dt>
            <dd className="m-0 mt-2">
              {site.arsenal.address}
              <br />
              {site.arsenal.hours}
              <br />
              Мойка: {site.arsenal.washHours}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-bg py-10 pb-24 md:pb-10">
      <div className="container grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="m-0 text-lg font-bold">{site.brand}</p>
          <p className="mt-2 text-sm text-text-muted">
            {site.legal.name}, ИНН {site.legal.inn}, ОГРН {site.legal.ogrn}
          </p>
          <p className="mt-1 text-sm text-text-muted">{site.base.address}</p>
          <p className="mt-4 text-sm text-text-muted">{site.legal.copyright}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="/privacy/" className="text-text-muted hover:text-accent">
            Политика обработки персональных данных
          </a>
          <a href="/soglasie/" className="text-text-muted hover:text-accent">
            Согласие на обработку ПДн
          </a>
          <a href={site.mainSite} className="text-text-muted hover:text-accent">
            Основной сайт penza-evakuator.ru
          </a>
          <a href={site.arsenal.url} className="text-text-muted hover:text-accent">
            Грузовой сервис ARSENAL
          </a>
        </div>
      </div>
    </footer>
  );
}
