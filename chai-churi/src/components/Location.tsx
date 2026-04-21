"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export default function Location() {
  return (
    <section id="location" className="relative bg-brand-cream-soft py-20 md:py-28">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Find Us</div>
          <h2 className="mt-2 h-display font-bold text-brand-green-dark">
            Visit our cafe in Una.
          </h2>
          <p className="mt-3 text-brand-brown-dark/70">
            Drop in for a cup of chai or a fresh pizza — we're open late.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card overflow-hidden lg:col-span-3"
          >
            <iframe
              title="Chai-Churi location map"
              src={BUSINESS.mapsEmbed}
              width="100%"
              height="100%"
              className="h-80 w-full lg:h-[460px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <InfoBlock
              icon={<MapPin className="h-5 w-5" />}
              label="Address"
              value={BUSINESS.address}
            />
            <InfoBlock
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value={BUSINESS.phoneDisplay}
              href={`tel:${BUSINESS.phone}`}
            />
            <InfoBlock
              icon={<Clock className="h-5 w-5" />}
              label="Hours"
              value={BUSINESS.hours}
            />
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 w-full"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
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
  const inner = (
    <div className="flex gap-4 rounded-3xl border border-brand-green/10 bg-white p-5 shadow-soft transition hover:shadow-card">
      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-gold-gradient text-brand-brown-dark shadow-soft">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-semibold leading-relaxed text-brand-green-dark">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
