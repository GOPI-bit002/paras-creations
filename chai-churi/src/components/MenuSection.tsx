"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { ALL_CATEGORIES, PRODUCTS } from "@/data/menu";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

const TABS = ["All", ...ALL_CATEGORIES] as const;

export default function MenuSection() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        (query === "" ||
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)),
    );
  }, [active, q]);

  return (
    <section id="menu" className="relative bg-brand-cream-soft py-20 md:py-28">
      <div className="section">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">Our Menu</div>
            <h2 className="mt-2 h-display font-bold text-brand-green-dark">
              Crafted with love,
              <br />
              served with pride.
            </h2>
            <p className="mt-3 max-w-xl text-brand-brown-dark/70">
              Browse {PRODUCTS.length}+ delicious vegetarian items across{" "}
              {ALL_CATEGORIES.length} categories. Add to cart and send your
              order on WhatsApp in a tap.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-green/50" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search chai, pizza, shake…"
              className="w-full rounded-full border border-brand-green/15 bg-white/80 py-3 pl-11 pr-4 text-sm text-brand-green-dark shadow-soft outline-none transition focus:border-brand-green/40 focus:bg-white"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition",
                active === t
                  ? "border-brand-green bg-brand-green text-white shadow-soft"
                  : "border-brand-green/15 bg-white/70 text-brand-green-dark hover:border-brand-green/35 hover:bg-white",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-brand-green/20 bg-white/60 py-14 text-center text-brand-brown-dark/60">
            No items match your search. Try another flavour ☕
          </div>
        )}
      </div>
    </section>
  );
}
