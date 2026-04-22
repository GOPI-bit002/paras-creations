"use client";

import { motion } from "framer-motion";
import {
  AirVent,
  BedDouble,
  Car,
  ConciergeBell,
  MessageCircle,
  Users,
  Wifi,
} from "lucide-react";
import { waLink } from "@/lib/site";

const rooms = [
  {
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    description:
      "A cozy, well-appointed room for solo travellers and couples — perfect for a restful night on the highway.",
    features: [
      { icon: <AirVent className="h-4 w-4" />, label: "AC" },
      { icon: <BedDouble className="h-4 w-4" />, label: "Comfy Bed" },
      { icon: <ConciergeBell className="h-4 w-4" />, label: "Room Service" },
      { icon: <Wifi className="h-4 w-4" />, label: "Wi-Fi" },
    ],
  },
  {
    name: "Family Room",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious rooms designed for families and small groups, with extra bedding options and comfortable seating.",
    features: [
      { icon: <Users className="h-4 w-4" />, label: "Family Size" },
      { icon: <AirVent className="h-4 w-4" />, label: "AC" },
      { icon: <Car className="h-4 w-4" />, label: "Parking" },
      { icon: <ConciergeBell className="h-4 w-4" />, label: "Room Service" },
    ],
  },
  {
    name: "Premium Stay",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    fallback:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    description:
      "Our most comfortable category — thoughtful details, quality linen and a calm, premium ambience.",
    features: [
      { icon: <BedDouble className="h-4 w-4" />, label: "King Bed" },
      { icon: <AirVent className="h-4 w-4" />, label: "AC" },
      { icon: <ConciergeBell className="h-4 w-4" />, label: "Room Service" },
      { icon: <Wifi className="h-4 w-4" />, label: "Wi-Fi" },
    ],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="section-py bg-sand/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Rooms &amp; Stays</span>
          <h2 className="heading">Pick the room that suits your journey</h2>
          <p className="mt-4 text-charcoal/70">
            Every room at Hotel TARA is kept clean, calm and comfortable — with
            friendly service you can rely on.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} at Hotel TARA`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = room.fallback;
                  }}
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
                  Contact for Best Rates
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-charcoal">
                  {room.name}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  {room.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <li key={f.label} className="chip">
                      {f.icon}
                      {f.label}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(
                    `Hello Hotel TARA, I'd like to enquire about the ${room.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
