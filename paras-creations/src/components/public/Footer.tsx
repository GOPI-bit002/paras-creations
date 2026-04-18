import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  const topServices = services.slice(0, 5);

  return (
    <footer className="bg-brand-black text-white/80 mt-20 relative overflow-hidden">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />

      <div className="container-premium py-16 grid md:grid-cols-12 gap-10 relative">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-11 w-11 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold text-lg shadow-gold">
              P
            </span>
            <div>
              <div className="text-white font-display font-bold text-lg">
                {company.name}
              </div>
              <div className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">
                {company.tagline}
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 max-w-md leading-relaxed">
            Founded and led by {company.owner}, {company.name} delivers premium
            government and private construction projects with a commitment to
            quality, safety, and on-time delivery.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {[
              { label: "Facebook", icon: "M13.4 21v-7.6h2.55l.38-2.97H13.4V8.54c0-.86.24-1.44 1.47-1.44h1.57V4.44a20.93 20.93 0 00-2.28-.12c-2.26 0-3.8 1.38-3.8 3.9v2.21H7.8v2.97h2.56V21h3.04z" },
              { label: "Instagram", icon: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.55.22.95.48 1.37.9.42.41.68.82.9 1.36.16.42.36 1.06.4 2.23.07 1.27.08 1.65.08 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.55-.48.95-.9 1.37-.41.42-.82.68-1.36.9-.42.16-1.06.36-2.23.4-1.27.07-1.65.08-4.85.08s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.37-.9 3.7 3.7 0 01-.9-1.36c-.16-.42-.36-1.06-.4-2.23C2.2 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.55.48-.95.9-1.37.41-.42.82-.68 1.36-.9.42-.16 1.06-.36 2.23-.4C8.42 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.82-.38.39-.62.76-.82 1.27-.15.39-.33.97-.38 2.04C2.7 9.81 2.7 10.15 2.7 12s0 2.2.06 3.44c.04 1.07.22 1.66.37 2.04.2.51.44.88.82 1.27.39.38.76.62 1.27.82.39.15.97.33 2.04.38 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.82.38-.39.62-.76.82-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 00-.82-1.27 3.4 3.4 0 00-1.27-.82c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 110 9.9 4.95 4.95 0 010-9.9zm0 1.8a3.15 3.15 0 100 6.3 3.15 3.15 0 000-6.3zm5.15-3.08a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32z" },
              { label: "WhatsApp", icon: "M20.5 3.5A10.5 10.5 0 003.07 18.6L2 22l3.5-.9A10.5 10.5 0 1020.5 3.5zM12 20a8 8 0 01-4.2-1.2l-.3-.2-2.1.6.6-2-.2-.3A8 8 0 1120 12a8 8 0 01-8 8zm4.4-5.9c-.24-.12-1.4-.7-1.62-.78-.21-.08-.37-.12-.52.12-.16.24-.6.78-.74.94-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.18a7.2 7.2 0 01-1.33-1.66c-.14-.24 0-.37.1-.49.1-.1.24-.27.36-.4.12-.15.16-.24.24-.4.08-.17.04-.3-.02-.42-.06-.12-.52-1.26-.72-1.72-.19-.45-.39-.4-.53-.4h-.45c-.16 0-.4.06-.61.3-.2.24-.8.78-.8 1.9 0 1.13.82 2.21.93 2.37.12.16 1.6 2.44 3.87 3.42.54.24.97.38 1.3.48.55.17 1.05.15 1.44.1.44-.07 1.37-.56 1.57-1.1.2-.55.2-1.01.14-1.1-.06-.1-.22-.16-.46-.27z" }
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="h-9 w-9 rounded-full border border-white/10 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-brand-gold transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            {topServices.map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  className="hover:text-brand-gold transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-white/60">{company.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
              </svg>
              <a href={`tel:${company.phone}`} className="hover:text-brand-gold transition-colors">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <span className="text-white/60">{company.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
              </svg>
              <span className="text-white/60">Mon - Sat · 9 AM to 7 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-premium py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {company.name}. All rights reserved · Owned by {company.owner}.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/30">Crafted with quality</span>
            <Link
              href="/admin"
              className="hover:text-brand-gold transition-colors"
              title="Admin login — internal use only"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
