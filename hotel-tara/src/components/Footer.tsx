"use client";

import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-cream">
              <span className="font-serif text-lg">T</span>
            </span>
            <span className="font-serif text-2xl">
              Hotel <span className="text-gold-light">TARA</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            A peaceful, premium highway stay in Himachal Pradesh — for
            travellers, families and business visitors.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
            Quick Links
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-cream/80 transition hover:text-gold-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-light" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-light" />
              <a
                href={`tel:${site.phoneTel}`}
                className="hover:text-gold-light"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-6 text-xs text-cream/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} Hotel TARA. All rights reserved.
          </p>
          <p>Behdala · Nangal Road · NH 503 · Una · Himachal Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
