import { industries } from "@/data/process";

export default function Industries() {
  const items = [...industries, ...industries]; // loop for marquee
  return (
    <section className="bg-brand-black border-y border-white/10 py-8 overflow-hidden relative">
      <div className="container-premium flex items-center gap-6 mb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold whitespace-nowrap">
          Industries we serve
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent" />
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-10 marquee whitespace-nowrap">
          {items.map((i, idx) => (
            <div
              key={`${i}-${idx}`}
              className="flex items-center gap-3 text-white/60 hover:text-brand-gold transition-colors"
            >
              <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 3l7 7-7 7-7-7 7-7z" />
              </svg>
              <span className="font-display font-semibold text-lg tracking-wide">
                {i}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
