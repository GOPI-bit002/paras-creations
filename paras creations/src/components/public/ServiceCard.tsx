import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card group p-6 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-gold relative overflow-hidden">
      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />

      <div className="relative h-14 w-14 rounded-xl bg-brand-black text-brand-gold flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300 shadow-premium">
        {service.icon}
      </div>

      <h3 className="font-display font-bold text-lg text-brand-black leading-snug group-hover:text-brand-black transition-colors">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-brand-black">
        <span className="group-hover:text-brand-gold transition-colors">
          Learn more
        </span>
        <svg
          className="w-4 h-4 text-brand-gold transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
}
