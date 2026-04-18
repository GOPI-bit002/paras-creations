"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-40 bg-brand-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-premium flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold text-lg shadow-gold">
            P
          </span>
          <div className="leading-tight">
            <div className="text-white font-display font-bold tracking-wide">
              {company.name}
            </div>
            <div className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">
              Construction
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${company.phone}`}
            className="text-sm text-white/70 hover:text-brand-gold"
          >
            {company.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary !px-4 !py-2 text-sm">
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-black border-t border-white/10 animate-fade-in">
          <div className="container-premium py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-brand-gold font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
