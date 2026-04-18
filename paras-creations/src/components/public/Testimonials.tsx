import SectionTitle from "./SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <SectionTitle
          eyebrow="Client Voices"
          title="Trusted by government and private clients."
          subtitle="Real feedback from projects completed across Punjab and North India."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="card p-7 flex flex-col hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-gold relative"
            >
              <svg
                className="absolute -top-3 -left-3 h-10 w-10 text-brand-gold bg-white rounded-full p-2 shadow-premium"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="flex items-center gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-brand-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.87 3.09 1.12-6.54L.5 6.91l6.56-.95L10 0l2.94 5.96 6.56.95-4.75 4.64 1.12 6.54z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-black to-brand-gray text-brand-gold flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-brand-black text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
