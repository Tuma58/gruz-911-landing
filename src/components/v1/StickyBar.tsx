import { site } from "@/data/site";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/95 p-2 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phones.shortTel}
          className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-accent px-3 text-center text-sm font-bold text-accent-contrast no-underline"
        >
          Позвонить {site.phones.short}
        </a>
        <a
          href="#geo"
          className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-border-control px-3 text-center text-sm font-bold text-text no-underline"
        >
          Геопозиция
        </a>
      </div>
    </div>
  );
}
