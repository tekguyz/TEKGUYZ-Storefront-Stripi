import { TRUST_ITEMS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="w-full border-y border-[var(--color-border)] bg-background py-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative w-full justify-center">
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">{item.label}</span>
                <span className="text-sm font-black uppercase tracking-[0.12em] text-[var(--color-text)]">{item.value}</span>
              </div>
              {index < TRUST_ITEMS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-[var(--color-border)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
