"use client";

import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/utils";

const MENU_LINKS = [
  "Chai",
  "Churi",
  "Pizza",
  "Burgers",
  "Sandwiches",
  "Shakes",
  "Mojitos",
  "Cold Coffee",
];

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-green-dark text-brand-off-white">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-green-soft/20 blur-3xl" />

      <div className="section relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-brand-brown-dark shadow-glow">
                <span className="font-display text-lg font-bold">C</span>
              </div>
              <div>
                <div className="font-display text-xl font-bold">Chai-Churi</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
                  Cafe · Una
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-off-white/65">
              Premium chai, traditional churi, and modern cafe favourites —
              crafted fresh in Una, Himachal Pradesh.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-brand-gold/50 hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-brand-gold/50 hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-off-white/70">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="transition hover:text-brand-gold-soft"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Menu</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-brand-off-white/70">
              {MENU_LINKS.map((m) => (
                <li key={m}>
                  <a href="#menu" className="transition hover:text-brand-gold-soft">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-off-white/75">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-brand-gold-soft" />
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2.5 transition hover:text-brand-gold-soft"
                >
                  <Phone className="h-4 w-4 text-brand-gold-soft" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand-gold-soft" />
                {BUSINESS.hours}
              </li>
            </ul>
            <a
              href={whatsappLink("Hello Chai-Churi, I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white transition hover:brightness-110"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-brand-off-white/55 sm:flex-row">
          <div>© {new Date().getFullYear()} Chai-Churi. All rights reserved.</div>
          <div>Crafted with ❤️ in Una, Himachal Pradesh.</div>
        </div>
      </div>
    </footer>
  );
}
