import Link from "next/link";

type Props = {
  active: "v1" | "v2" | "v3";
};

const items = [
  { id: "v1" as const, href: "/v1", label: "Вариант 1 · технический" },
  { id: "v2" as const, href: "/v2", label: "Вариант 2 · современный" },
  { id: "v3" as const, href: "/v3", label: "Вариант 3 · SpaceX" },
];

export function VariantSwitcher({ active }: Props) {
  return (
    <div className="relative z-50 border-b border-border bg-surface">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
        <p className="m-0 text-text-muted">Сравнение макетов</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={[
                "rounded-full px-3 py-1.5 font-semibold no-underline transition-colors",
                active === item.id
                  ? "bg-accent text-accent-contrast"
                  : "border border-border-control text-text hover:bg-bg",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
