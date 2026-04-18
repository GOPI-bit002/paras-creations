import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card group p-6 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-gold">
      <div className="h-12 w-12 rounded-lg bg-brand-black text-brand-gold flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
        {service.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-brand-black leading-snug">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {service.description}
      </p>
      <div className="mt-5 flex items-center text-sm font-semibold text-brand-black group-hover:text-brand-gold transition-colors">
        Learn more
        <svg
          className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
