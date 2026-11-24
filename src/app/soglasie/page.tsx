import Link from "next/link";

export const metadata = {
  title: "Согласие на обработку персональных данных | 911",
};

export default function ConsentPage() {
  return (
    <main className="container prose-narrow py-12">
      <Link href="/" className="text-sm text-accent">
        ← На лендинг
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Согласие на обработку персональных данных</h1>
      <p className="mt-4 text-text-muted">
        Отдельный документ согласия готовит юрист заказчика [ЗАПОЛНИТЬ]. Заглушка для чекбоксов
        форм.
      </p>
    </main>
  );
}
