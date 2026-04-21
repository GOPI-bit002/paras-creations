"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/menu";

export default function CategorySection() {
  return (
    <section id="categories" className="relative py-20 md:py-28">
      <div className="section">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">Explore our world</div>
            <h2 className="mt-2 h-display font-bold text-brand-green-dark">
              Featured categories
            </h2>
            <p className="mt-3 max-w-xl text-brand-brown-dark/70">
              From piping hot chai to thick shakes and hand-tossed pizzas —
              everything crafted fresh in our Una kitchen.
            </p>
          </div>
          <a
            href="#menu"
            className="hidden items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-soft md:inline-flex"
          >
            See full menu <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <motion.a
              key={c.name}
              href="#menu"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 text-white">
                  <div className="font-display text-xl font-semibold md:text-2xl">
                    {c.name}
                  </div>
                  <div className="mt-0.5 text-xs text-white/80">
                    {c.description}
                  </div>
                </div>
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand-green-dark opacity-0 shadow-soft transition group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
