import Link from "next/link";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />

      <div className="container-premium relative z-10 py-20 sm:py-28 lg:py-36 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="chip bg-brand-gold/15 text-brand-gold mb-6 border border-brand-gold/30">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {company.established} · Government & Private Contractor
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Building India with{" "}
            <span className="bg-gradient-to-r from-brand-gold via-brand-goldlight to-brand-gold bg-clip-text text-transparent">
              Strength &amp; Trust
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            {company.name} — led by {company.owner} — delivers premium{" "}
            <span className="text-brand-gold">government</span> and{" "}
            <span className="text-brand-gold">private</span> construction projects
            with uncompromising quality, safety, and on-time execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">
              View Projects →
            </Link>
            <Link href="/contact" className="btn-outline">
              Send Enquiry
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/50">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-brand-black bg-gradient-to-br from-brand-gold to-brand-goldlight"
                />
              ))}
            </div>
            <div>
              Trusted by government bodies and 120+ private clients.
            </div>
          </div>
        </div>

        {/* Hero stats card */}
        <div className="lg:col-span-5 animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/40 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold mb-4">
                Owner Message
              </div>
              <div className="text-white text-lg leading-relaxed">
                “Every project we build carries our name. For us, construction is
                a commitment — to our clients, to quality, and to the communities
                we serve.”
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldlight flex items-center justify-center text-brand-black font-bold text-lg">
                  MS
                </div>
                <div>
                  <div className="text-white font-semibold">{company.owner}</div>
                  <div className="text-xs text-white/60">
                    {company.ownerTitle}, {company.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-brand-black/40">
        <div className="container-premium grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {company.stats.map((s) => (
            <div key={s.label} className="py-6 px-4 text-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-gold">
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
