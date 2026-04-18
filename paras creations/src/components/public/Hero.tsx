import Link from "next/link";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {/* Real construction site background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/90 to-brand-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Gold glow */}
      <div
        className="absolute -top-40 -right-24 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />

      <div className="container-premium relative z-10 py-20 sm:py-28 lg:py-36 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="chip bg-brand-gold/15 text-brand-gold mb-6 border border-brand-gold/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
            </span>
            {company.established} · Government &amp; Private Contractor
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.04] tracking-tight">
            Building India with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-gold via-brand-goldlight to-brand-gold bg-clip-text text-transparent">
                Strength
              </span>
              <span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-brand-gold to-transparent rounded-full"
                aria-hidden
              />
            </span>{" "}
            &amp;{" "}
            <span className="bg-gradient-to-r from-brand-gold via-brand-goldlight to-brand-gold bg-clip-text text-transparent">
              Trust
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
            {company.name} — led by {company.owner} — delivers premium{" "}
            <span className="text-brand-gold font-semibold">government</span> and{" "}
            <span className="text-brand-gold font-semibold">private</span>{" "}
            construction projects with uncompromising quality, safety, and
            on-time execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">
              View Projects →
            </Link>
            <Link href="/contact" className="btn-outline">
              Send Enquiry
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Government Certified
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              ISO-Standard Execution
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18A2.99 2.99 0 0015 4H9c-1.3 0-2.4.84-2.82 2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-8 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
              On-Time Handover
            </div>
          </div>
        </div>

        {/* Owner quote card */}
        <div className="lg:col-span-5 animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/50 via-brand-gold/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-premium">
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Owner Message
                </div>
                <svg className="w-8 h-8 text-brand-gold/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="text-white text-lg leading-relaxed">
                Every project we build carries our name. For us, construction is
                a commitment — to our clients, to quality, and to the communities
                we serve.
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-bold text-lg ring-2 ring-brand-gold/40">
                  MS
                </div>
                <div>
                  <div className="text-white font-semibold">{company.owner}</div>
                  <div className="text-xs text-white/60">
                    {company.ownerTitle}, {company.name}
                  </div>
                </div>
                <a
                  href={`tel:${company.phone}`}
                  className="ml-auto h-10 w-10 rounded-full bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-black flex items-center justify-center transition-colors"
                  aria-label="Call owner"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-brand-black/60 backdrop-blur-sm">
        <div className="container-premium grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {company.stats.map((s) => (
            <div key={s.label} className="py-6 px-4 text-center group cursor-default">
              <div className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand-gold to-brand-goldlight bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
