"use client";

import { motion } from "framer-motion";
import { Leaf, MountainSnow, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-py bg-cream">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl2 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
              alt="Hotel TARA reception and lobby area"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 overflow-hidden rounded-xl2 shadow-card ring-4 ring-cream md:block">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="Comfortable room at Hotel TARA"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow">About Hotel TARA</span>
          <h2 className="heading">
            A peaceful highway stay in the heart of Himachal.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 md:text-lg">
            Hotel TARA is a comfortable, welcoming stay located on NH 503 near
            Una, Himachal Pradesh. Whether you are travelling through the hills,
            visiting family, or stopping by on a long highway route, TARA
            offers restful rooms, warm hospitality and easy road access.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <MountainSnow className="h-5 w-5" />,
                title: "Highway Convenience",
                text: "Direct access from NH 503.",
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Calm Surroundings",
                text: "Peaceful rooms to unwind.",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Warm Hospitality",
                text: "Friendly, helpful service.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl2 border border-black/5 bg-white p-5 shadow-soft"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                  {f.icon}
                </div>
                <h3 className="font-serif text-lg text-charcoal">{f.title}</h3>
                <p className="mt-1 text-sm text-charcoal/70">{f.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
