"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send, Check } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/utils";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello ${BUSINESS.name},%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(
      `https://wa.me/91${BUSINESS.phone}?text=${msg}`,
      "_blank",
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="section grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Get in touch</div>
          <h2 className="mt-2 h-display font-bold text-brand-green-dark">
            Reach out,
            <br />
            we'd love to hear from you.
          </h2>
          <p className="mt-3 max-w-md text-brand-brown-dark/70">
            Questions, bulk orders, or catering? Call us, message on WhatsApp,
            or drop a note below.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-4 rounded-2xl border border-brand-green/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-green text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                  Call us
                </div>
                <div className="text-sm font-semibold text-brand-green-dark">
                  {BUSINESS.phoneDisplay}
                </div>
              </div>
            </a>
            <a
              href={whatsappLink("Hello Chai-Churi, I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-brand-green/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                  WhatsApp
                </div>
                <div className="text-sm font-semibold text-brand-green-dark">
                  Order in a tap
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-brand-green/10 bg-white p-4 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-gold text-brand-brown-dark">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                  Visit
                </div>
                <div className="text-sm font-semibold leading-snug text-brand-green-dark">
                  {BUSINESS.address}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-brand-green/10 bg-white p-4 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-brown text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                  Hours
                </div>
                <div className="text-sm font-semibold text-brand-green-dark">
                  {BUSINESS.hours}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={submit}
          className="card relative overflow-hidden p-6 md:p-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-gold/20 blur-3xl" />
          <h3 className="font-display text-2xl font-bold text-brand-green-dark">
            Send us a message
          </h3>
          <p className="mt-1 text-sm text-brand-brown-dark/60">
            We'll reply on WhatsApp within minutes.
          </p>

          <div className="mt-6 space-y-4">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Your full name"
            />
            <Field
              label="Phone"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              placeholder="10-digit phone number"
              type="tel"
            />
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need…"
                rows={4}
                required
                className="mt-2 w-full resize-none rounded-2xl border border-brand-green/15 bg-white px-4 py-3 text-sm text-brand-green-dark outline-none transition focus:border-brand-green/40"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full">
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Sent!
              </>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-brand-green/15 bg-white px-5 py-3 text-sm text-brand-green-dark outline-none transition focus:border-brand-green/40"
      />
    </div>
  );
}
