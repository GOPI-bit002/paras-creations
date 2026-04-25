import SectionTitle from "./SectionTitle";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section className="section-padding bg-brand-soft">
      <div className="container-premium">
        <SectionTitle
          eyebrow="How We Work"
          title="A transparent four-step process."
          subtitle="From first site visit to final handover, we keep you informed and in control."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((p, idx) => (
            <div
              key={p.id}
              className="relative card p-7 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-gold"
            >
              <div className="absolute -top-4 left-7 h-9 w-9 rounded-full bg-brand-gold text-brand-black font-bold text-sm flex items-center justify-center shadow-gold">
                {p.step}
              </div>
              <div className="mt-4">
                <h3 className="font-display font-bold text-lg text-brand-black leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-0.5 w-6 bg-gradient-to-r from-brand-gold to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
