"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Car,
  ConciergeBell,
  Droplets,
  Navigation,
  Phone,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const items = [
  { icon: <BedDouble className="h-6 w-6" />, title: "Comfortable Rooms", text: "Clean, cozy rooms designed for restful sleep." },
  { icon: <Car className="h-6 w-6" />, title: "Parking", text: "On-site parking for cars and larger vehicles." },
  { icon: <ConciergeBell className="h-6 w-6" />, title: "Room Service", text: "Prompt service, whenever you need it." },
  { icon: <Users className="h-6 w-6" />, title: "Family Friendly", text: "Rooms and service perfect for families." },
  { icon: <Navigation className="h-6 w-6" />, title: "Easy Highway Access", text: "Right on NH 503, simple to reach." },
  { icon: <Droplets className="h-6 w-6" />, title: "Clean Washrooms", text: "Hygienic and well-maintained bathrooms." },
  { icon: <UtensilsCrossed className="h-6 w-6" />, title: "Dining / Food", text: "Comforting home-style meals on request." },
  { icon: <Phone className="h-6 w-6" />, title: "Phone Booking", text: "Quick booking via call or WhatsApp." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section-py bg-cream">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Amenities</span>
          <h2 className="heading">Everything you need for a pleasant stay</h2>
          <p className="mt-4 text-charcoal/70">
            Thoughtful amenities and warm hospitality, offered with simple,
            honest service.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group card p-6 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream transition group-hover:bg-gold group-hover:text-charcoal">
                {item.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
