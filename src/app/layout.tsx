import type { Metadata } from "next";
import { Manrope, Oswald, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Грузовой эвакуатор Пенза 24/7 – эвакуация фур и тягачей | 911",
  description:
    "Эвакуация тягачей, фур, рефрижераторов и спецтехники в Пензе и на М5. Цена до выезда, договор и НДС, ремонт после эвакуации. 911-911",
  metadataBase: new URL("https://penza-evakuator.ru"),
  openGraph: {
    title: "Грузовой эвакуатор в Пензе и на трассе М5 – 24/7",
    description:
      "Тягачи, фуры, рефрижераторы, автобусы и спецтехника. Цена до выезда. Служба эвакуации 911.",
    locale: "ru_RU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Служба эвакуации 911 – грузовая эвакуация",
  telephone: ["+7-8412-911-911", "+7-800-700-29-11"],
  email: "penza911@bk.ru",
  url: "https://penza-evakuator.ru/gruzovoy-evakuator/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Беляева, д. 2Д",
    addressLocality: "Пенза",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: "Пенза, Пензенская область, трасса М5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
