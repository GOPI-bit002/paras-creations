"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-white/10 shadow-premium"
          : "bg-brand-black border-transparent"
      }`}
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      <div className="container-premium flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative h-10 w-10 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold text-lg shadow-gold group-hover:scale-105 transition-transform">
            P
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand-goldlight animate-pulse" />
          </span>
          <div className="leading-tight">
            <div className="text-white font-display font-bold tracking-wide">
              {company.name}
            </div>
            <div className="text-[10px] text-brand-gold uppercase tracking-[0.25em]">
              Construction Excellence
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${
                  active
                    ? "text-brand-gold"
                    : "text-white/80 hover:text-brand-gold"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.58l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
            </svg>
            {company.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary !px-4 !py-2 text-sm">
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/5"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-black border-t border-white/10 animate-fade-in">
          <div className="container-premium py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2.5 rounded-md font-medium transition-colors ${
                    active
                      ? "bg-brand-gold/10 text-brand-gold"
                      : "text-white/80 hover:bg-white/5 hover:text-brand-gold"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a href={`tel:${company.phone}`} className="text-white/70 text-sm px-3">
                Call: <span className="text-brand-gold">{company.phoneDisplay}</span>
              </a>
              <Link href="/contact" className="btn-primary justify-center mx-3">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
