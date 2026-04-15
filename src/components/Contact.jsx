import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.message) return
    setSubmitted(true)
    setFormData({ name: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold">
            Get in Touch
          </span>
          <h2 className="section-title mt-4">
            Let's talk about your{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              perfect sleep
            </span>
          </h2>
          <p className="section-subtitle text-center">
            Have a question or want to enquire about our products? We'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-brand-gradient rounded-3xl p-8 md:p-10 text-white shadow-card relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/10 rounded-full"></div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Contact Information
              </h3>
              <p className="mt-3 text-white/85 leading-relaxed max-w-md">
                Reach out to us directly — we're always happy to help you find
                the perfect mattress or pillow.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="tel:7018050630"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Phone</div>
                    <div className="text-lg font-semibold group-hover:underline">
                      7018050630
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:eshrinaina@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Email</div>
                    <div className="text-lg font-semibold group-hover:underline break-all">
                      eshrinaina@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.apple/p/bcX6SrF9eRNG4Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70">Visit Us</div>
                    <div className="text-lg font-semibold group-hover:underline">
                      View on Map
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-white/20">
                <div className="text-sm uppercase tracking-widest text-white/70">
                  Business Hours
                </div>
                <div className="mt-2 text-white/90">Mon – Sat: 9:00 AM – 8:00 PM</div>
                <div className="text-white/90">Sunday: 10:00 AM – 6:00 PM</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-slate-100"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Send us a message
            </h3>
            <p className="mt-2 text-slate-600">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your enquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full !py-3.5"
              >
                Submit Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
