"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const BULLETS = [
  "Premium chai brewed with fresh masalas, dry fruits & gud",
  "Traditional churi made in pure desi ghee & signature dry fruits",
  "100% vegetarian kitchen with hygienic, fresh ingredients",
  "Hand-tossed pizzas, loaded pastas, burgers, wraps & more",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-brand-green/10 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
              alt="Chai-Churi cafe interior"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 w-44 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur md:w-56">
            <div className="font-display text-4xl font-bold text-brand-green">
              100%
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Vegetarian
            </div>
            <p className="mt-1 text-xs text-brand-brown-dark/70">
              Pure veg kitchen · no shortcuts, ever.
            </p>
          </div>
          <div className="absolute -left-4 -top-6 hidden w-44 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur md:block">
            <div className="font-display text-4xl font-bold text-brand-green">
              150+
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Menu items
            </div>
            <p className="mt-1 text-xs text-brand-brown-dark/70">
              Something for every craving.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">Our Story</div>
          <h2 className="mt-2 h-display font-bold text-brand-green-dark">
            A modern cafe with{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              desi taste.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-brown-dark/75">
            Chai-Churi brings premium chai, traditional churi, vegetarian
            snacks, burgers, pizzas, shakes, and refreshing beverages to Una. A
            modern cafe experience with desi taste — where every cup is brewed
            slow, and every bite is made fresh.
          </p>

          <ul className="mt-6 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                <span className="text-brand-brown-dark/80">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="btn-primary">
              Explore Menu
            </a>
            <a href="#location" className="btn-ghost">
              Visit Our Cafe
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
