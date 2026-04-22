"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Send, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const enquiryMessage = () =>
    `Hello Hotel TARA, I'd like to enquire about a stay.%0A` +
    `Check-in: ${checkIn || "-"}%0A` +
    `Check-out: ${checkOut || "-"}%0A` +
    `Guests: ${guests}`;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream pt-24 md:pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2100f?auto=format&fit=crop&w=1920&q=80"
          alt="Mountain resort view near Una, Himachal Pradesh"
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-cream" />
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col gap-10 pb-12 pt-10 md:pb-20 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl text-cream"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest text-cream backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            PREMIUM STAY · HIMACHAL PRADESH
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            Welcome to <span className="text-gold-light">Hotel TARA</span>
          </h1>
          <p className="mt-5 flex items-start gap-2 text-base text-cream/90 md:text-lg">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-light" />
            <span>
              Vill. &amp; P.O. Behdala, Nangal Road, NH 503, Una, Himachal
              Pradesh 174306
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-cream/80">
            A calm, comfortable stay on the highway — rooms designed for
            travellers, families and weekend visits through the hills.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={`tel:${site.phoneTel}`} className="btn-gold">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={waLink(
                "Hello Hotel TARA, I'd like to make a booking enquiry."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-cream/40 !bg-white/10 !text-cream hover:!bg-cream hover:!text-forest"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Enquiry
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="card mt-auto grid grid-cols-1 gap-4 p-5 sm:p-6 md:grid-cols-5 md:items-end"
        >
          <div className="md:col-span-1">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-forest/80">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-forest"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-forest/80">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-forest"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-forest/80">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-forest"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${enquiryMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !py-3.5 text-base"
            >
              <Send className="h-4 w-4" />
              Send Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
