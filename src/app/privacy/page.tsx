import Link from "next/link";

export const metadata = {
  title: "Политика обработки персональных данных | 911",
};

export default function PrivacyPage() {
  return (
    <main className="container prose-narrow py-12">
      <Link href="/" className="text-sm text-accent">
        ← На лендинг
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Политика обработки персональных данных</h1>
      <p className="mt-4 text-text-muted">
        Текст готовит юрист заказчика [ЗАПОЛНИТЬ]. На основном сайте:{" "}
        <a href="https://penza-evakuator.ru/" className="text-accent underline">
          penza-evakuator.ru
        </a>
        . Эта страница – заглушка для ссылок из форм.
      </p>
    </main>
  );
}
