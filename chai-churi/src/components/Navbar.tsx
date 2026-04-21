"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingBag, X, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BUSINESS } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-green/10 bg-brand-off-white/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="section flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green text-brand-gold-soft shadow-glow">
            <span className="font-display text-lg font-bold">C</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-brand-green-dark md:text-xl">
              Chai-Churi
            </div>
            <div className="-mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-gold">
              Cafe · Una
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-brand-green-dark/80 transition-colors hover:text-brand-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden items-center gap-2 rounded-full border border-brand-green/15 bg-white/70 px-4 py-2 text-sm font-medium text-brand-green backdrop-blur transition hover:bg-white md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>

          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-green text-white shadow-soft transition hover:bg-brand-green-soft"
          >
            <ShoppingBag className="h-5 w-5" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-gold px-1 text-[10px] font-bold text-brand-brown-dark"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-green/15 bg-white/70 text-brand-green backdrop-blur lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-green-dark/50 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-brand-cream-soft p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-brand-green-dark">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-green"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-2">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl bg-white/70 px-5 py-4 font-display text-xl text-brand-green-dark shadow-soft"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary mt-8 w-full"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
