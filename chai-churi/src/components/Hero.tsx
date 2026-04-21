"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight, Leaf, Star } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/utils";

const FLOATERS = [
  {
    src: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=400&q=80",
    title: "Masala Chai",
    price: "₹160",
    cls: "top-6 -left-6 md:top-10 md:-left-10 w-32 md:w-48",
    anim: "animate-float",
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
    title: "Oreo Shake",
    price: "₹190",
    cls: "top-24 -right-4 md:top-20 md:-right-8 w-36 md:w-52",
    anim: "animate-float-slow",
  },
  {
    src: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80",
    title: "Margherita 12\"",
    price: "₹420",
    cls: "-bottom-6 left-6 md:-bottom-4 md:left-10 w-36 md:w-52",
    anim: "animate-float",
  },
];

export default function Hero() {
  const msg =
    "Hello Chai-Churi, I'd like to place an order. Please share the menu details.";
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" />

      <div className="section grid grid-cols-1 items-center gap-10 pb-16 md:pb-24 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="chip"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-green" />
            Una · Himachal Pradesh
          </motion.div>

          <h1 className="mt-5 h-display font-bold text-brand-green-dark">
            <span className="block">Chai-Churi</span>
            <span className="mt-2 block bg-gold-gradient bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl">
              Brewed with tradition.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base text-brand-brown-dark/75 md:text-lg">
            {BUSINESS.tagline}. Pure vegetarian · desi taste · modern cafe
            vibes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#menu" className="btn-primary">
              View Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(msg)}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
            <InfoPill
              icon={<Phone className="h-4 w-4" />}
              label="Call us"
              value={BUSINESS.phoneDisplay}
              href={`tel:${BUSINESS.phone}`}
            />
            <InfoPill
              icon={<Clock className="h-4 w-4" />}
              label="Hours"
              value="Closes 11:30 pm"
            />
            <InfoPill
              icon={<Leaf className="h-4 w-4" />}
              label="100%"
              value="Vegetarian"
            />
          </div>
        </motion.div>

        {/* Right: hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-brand-green/10 bg-brand-cream shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Chai-Churi cafe"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green-dark/50 via-transparent to-transparent" />

            {/* Rating badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-green-dark shadow-soft backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
              4.8 · Loved locally
            </div>

            {/* Bottom caption */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-brand-green-dark shadow-soft backdrop-blur-xl">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                  Chef's Signature
                </div>
                <div className="font-display text-lg font-semibold">
                  Kesar Chai + Dry Fruits Churi
                </div>
              </div>
              <div className="font-semibold">₹290</div>
            </div>
          </div>

          {/* Floating product cards */}
          {FLOATERS.map((f) => (
            <div
              key={f.title}
              className={`absolute ${f.cls} ${f.anim} rounded-2xl border border-white/60 bg-white/80 p-2 shadow-card backdrop-blur-xl`}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={f.src}
                  alt={f.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-1 pb-1">
                <div className="text-xs font-semibold text-brand-green-dark">
                  {f.title}
                </div>
                <div className="text-xs font-bold text-brand-gold">
                  {f.price}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function InfoPill({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-brand-green/10 bg-white/70 px-4 py-3 shadow-soft backdrop-blur">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-green text-brand-gold-soft">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
          {label}
        </div>
        <div className="text-sm font-semibold text-brand-green-dark">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {content}
    </a>
  ) : (
    content
  );
}
