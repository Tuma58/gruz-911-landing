import { site } from "@/data/site";

export function StickyBarV2() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-[20px] border border-border bg-surface/95 p-2 shadow-[0_-8px_30px_rgba(11,18,32,0.1)] backdrop-blur-md">
        <a
          href={site.phones.shortTel}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-3 text-center text-sm font-bold text-accent-contrast no-underline"
        >
          Позвонить {site.phones.short}
        </a>
        <a
          href="#geo"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-control px-3 text-center text-sm font-bold no-underline"
        >
          Геопозиция
        </a>
      </div>
    </div>
  );
}
