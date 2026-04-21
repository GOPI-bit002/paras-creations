"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Coffee,
  Utensils,
  MessageCircle,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const ITEMS = [
  {
    icon: Leaf,
    title: "Fresh Vegetarian Food",
    copy: "Pure veg, made fresh every day with hygienic ingredients.",
  },
  {
    icon: Coffee,
    title: "Premium Chai Experience",
    copy: "11 authentic blends — from gud chai to kesar chai.",
  },
  {
    icon: Utensils,
    title: "Wide Menu Variety",
    copy: "150+ items across chai, churi, pizza, burgers, shakes & more.",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Ordering",
    copy: "Add to cart and send your order in a tap. No app needed.",
  },
  {
    icon: HeartHandshake,
    title: "Cozy Cafe Feel",
    copy: "Warm lighting, comfy seats — your new favourite hangout.",
  },
  {
    icon: MapPin,
    title: "Right in Una",
    copy: "Malahat Nagar, Professor Colony — easy to find, easy to love.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-green-dark py-20 text-brand-off-white md:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-green-soft/30 blur-3xl" />

      <div className="section relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow text-brand-gold-soft">Why Chai-Churi</div>
          <h2 className="mt-2 h-display font-bold">
            Six reasons to{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              fall in love.
            </span>
          </h2>
          <p className="mt-3 text-brand-off-white/70">
            More than a cafe — it's a warm, desi, thoughtfully crafted
            experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-brand-gold/40 hover:bg-white/[0.07]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-brand-brown-dark shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm text-brand-off-white/70">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
