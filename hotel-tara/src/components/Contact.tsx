"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { site, waLink } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const handleChange =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hello Hotel TARA, I'd like to make an enquiry.%0A` +
      `Name: ${form.name || "-"}%0A` +
      `Phone: ${form.phone || "-"}%0A` +
      `Check-in: ${form.checkIn || "-"}%0A` +
      `Check-out: ${form.checkOut || "-"}%0A` +
      `Guests: ${form.guests}%0A` +
      `Message: ${form.message || "-"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-py bg-sand/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="heading">Get in touch — we&apos;d love to host you</h2>
          <p className="mt-4 text-charcoal/70">
            Reach out by phone, WhatsApp or fill the enquiry form. We respond
            quickly and will help plan your stay.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card p-7 lg:col-span-2"
          >
            <h3 className="font-serif text-2xl text-charcoal">Hotel TARA</h3>
            <p className="mt-1 text-sm text-charcoal/70">
              Premium stay in Himachal Pradesh
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest/70">
                    Address
                  </p>
                  <p className="mt-1 text-charcoal">{site.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-forest/70">
                    Phone
                  </p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="mt-1 block text-charcoal hover:text-forest"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneTel}`} className="btn-primary">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={waLink("Hello Hotel TARA, I'd like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <ExternalLink className="h-4 w-4" />
                Open Maps
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-7 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Your full name"
                  className="input"
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="+91 98000 00000"
                  className="input"
                />
              </Field>
              <Field label="Check-in">
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={handleChange("checkIn")}
                  className="input"
                />
              </Field>
              <Field label="Check-out">
                <input
                  type="date"
                  value={form.checkOut}
                  onChange={handleChange("checkOut")}
                  className="input"
                />
              </Field>
              <Field label="Guests">
                <select
                  value={form.guests}
                  onChange={handleChange("guests")}
                  className="input"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Any special requests or questions?"
                  className="input resize-none"
                />
              </Field>
            </div>
            <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Send Enquiry via WhatsApp
            </button>
            <p className="mt-3 text-xs text-charcoal/60">
              On submit we&apos;ll open WhatsApp with your enquiry pre-filled —
              no account or sign-up required.
            </p>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: #fff;
          padding: 12px 14px;
          font-size: 14px;
          color: #1c1c1e;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: #1f3d2b;
          box-shadow: 0 0 0 3px rgba(31, 61, 43, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-forest/70">
        {label}
      </span>
      {children}
    </label>
  );
}
