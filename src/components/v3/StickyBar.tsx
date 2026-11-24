import { site } from "@/data/site";

export function StickyBarV3() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-black md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.phones.shortTel}
          className="inline-flex min-h-14 items-center justify-center bg-white px-3 text-center text-xs font-bold tracking-[0.12em] text-black uppercase no-underline"
        >
          Позвонить {site.phones.short}
        </a>
        <a
          href="#geo"
          className="inline-flex min-h-14 items-center justify-center border-l border-white/20 px-3 text-center text-xs font-bold tracking-[0.12em] uppercase no-underline"
        >
          Геопозиция
        </a>
      </div>
    </div>
  );
}
