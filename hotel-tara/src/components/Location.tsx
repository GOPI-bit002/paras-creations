"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation2, Route } from "lucide-react";
import { site } from "@/lib/site";

const nearby = [
  {
    icon: <Route className="h-4 w-4" />,
    title: "NH 503 Highway",
    text: "Direct access, easy parking",
  },
  {
    icon: <Navigation2 className="h-4 w-4" />,
    title: "Una City",
    text: "Short drive from Una town",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    title: "Nangal Road",
    text: "Ideal for travellers & families",
  },
];

export default function Location() {
  return (
    <section id="location" className="section-py bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Find Us</span>
          <h2 className="heading">
            On NH 503, near Una — <br />
            easy to reach, easy to rest.
          </h2>
          <p className="mt-5 max-w-xl text-charcoal/75">
            Hotel TARA sits right on the highway, making it a natural stop for
            travellers moving between Himachal and Punjab. The location is
            calm, safe and convenient.
          </p>

          <div className="mt-6 rounded-xl2 border border-black/5 bg-white p-5 shadow-soft">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest/70">
                  Address
                </p>
                <p className="mt-1 text-charcoal">{site.address}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn-outline">
                Call for Directions
              </a>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {nearby.map((n) => (
              <li
                key={n.title}
                className="rounded-xl2 bg-sand p-4 text-sm text-charcoal"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-forest">
                  {n.icon}
                </div>
                <p className="font-semibold">{n.title}</p>
                <p className="text-charcoal/70">{n.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-xl2 shadow-card ring-1 ring-black/5"
        >
          <iframe
            title="Hotel TARA location map"
            src={site.mapsEmbed}
            className="h-[420px] w-full md:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
