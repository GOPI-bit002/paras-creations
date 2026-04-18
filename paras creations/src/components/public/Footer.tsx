import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 mt-20">
      <div className="container-premium py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-10 w-10 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold">
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
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-gold">About</Link></li>
            <li><Link href="/services" className="hover:text-brand-gold">Services</Link></li>
            <li><Link href="/projects" className="hover:text-brand-gold">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Owner: {company.owner}</li>
            <li>
              <a href={`tel:${company.phone}`} className="hover:text-brand-gold">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="text-white/60">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <Link
            href="/admin"
            className="hover:text-brand-gold transition-colors"
            title="Admin login — internal use only"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
