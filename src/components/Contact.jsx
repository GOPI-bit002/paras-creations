import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ExternalLink, CheckCircle2 } from "lucide-react";

const MAP_URL = "https://maps.apple.com/?address=Hamirpur%2C%20Himachal%20Pradesh";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client as a no-backend fallback
    const subject = encodeURIComponent(`Enquiry from ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:eshrinaina@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-cream">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Get in Touch</span>
          <h2 className="heading mt-3">We&apos;d love to hear from you.</h2>
          <p className="subheading mt-4">
            Have a question about a product, pricing, or delivery? Reach out —
            we respond quickly.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-ink text-cream rounded-3xl p-8 sm:p-10 shadow-premium relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-midblue/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-sand/20 blur-3xl" />

            <div className="relative">
              <h3 className="font-display text-2xl font-semibold">Contact Info</h3>
              <p className="text-cream/70 text-sm mt-2">
                Shree Naina Enterprises
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </span>
                  <a
                    href="tel:+917018050630"
                    className="hover:text-white transition-colors"
                  >
                    <div className="text-cream/60 text-xs">Phone</div>
                    <div className="text-cream font-medium">7018050630</div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </span>
                  <a
                    href="mailto:eshrinaina@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    <div className="text-cream/60 text-xs">Email</div>
                    <div className="text-cream font-medium">
                      eshrinaina@gmail.com
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <div className="text-cream/60 text-xs">Address</div>
                    <div className="text-cream font-medium">
                      Hamirpur, Himachal Pradesh
                    </div>
                  </div>
                </li>
              </ul>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream text-ink text-sm font-medium hover:bg-white transition-colors shadow-soft"
              >
                View Location <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-soft border border-ink/5"
          >
            <h3 className="font-display text-2xl font-semibold text-ink">
              Send us a message
            </h3>
            <p className="text-sm text-muted mt-1">
              Fill the form — we&apos;ll get back to you shortly.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-ink/70 mb-2 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-midblue focus:ring-2 focus:ring-midblue/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink/70 mb-2 tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-midblue focus:ring-2 focus:ring-midblue/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs font-medium text-ink/70 mb-2 tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you sleep better…"
                className="w-full px-4 py-3 rounded-xl bg-cream border border-ink/10 focus:border-midblue focus:ring-2 focus:ring-midblue/20 outline-none transition-all text-sm resize-none"
              />
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <button type="submit" className="btn-primary">
                Send Message <Send size={15} />
              </button>
              {sent && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-midblue inline-flex items-center gap-2"
                >
                  <CheckCircle2 size={16} /> Opening your email app…
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
