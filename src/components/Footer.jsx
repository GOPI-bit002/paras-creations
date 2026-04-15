import { motion } from 'framer-motion'

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-max relative z-10 px-6 md:px-10 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold shadow-soft">
                SN
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-xl">
                  Shri Naina Enterprises
                </div>
                <div className="text-xs text-brand-200">Comfort You Can Trust</div>
              </div>
            </div>
            <p className="mt-5 text-slate-400 leading-relaxed max-w-md">
              Premium mattresses and pillows for better sleep. We bring comfort
              into every home with quality products and trusted service.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 px-3 py-2 rounded-2xl bg-white border border-white/10 shadow-soft">
              <img
                src="/images/spenta-logo.png"
                alt="Spenta Mattress"
                className="h-10 w-auto rounded-lg"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <span className="text-sm text-slate-700 pr-2">
                Powered by{' '}
                <span className="font-semibold text-slate-900">Spenta Mattress</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-white text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
                { label: 'Location', href: '#location' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-slate-400 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-white text-lg">Get in Touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:7018050630"
                  className="flex items-center gap-3 text-slate-400 hover:text-brand-300 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  7018050630
                </a>
              </li>
              <li>
                <a
                  href="mailto:eshrinaina@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-brand-300 transition-colors break-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  eshrinaina@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.apple/p/bcX6SrF9eRNG4Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-brand-300 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  View on Map
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {year} Shri Naina Enterprises. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Powered by{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent font-semibold">
              Spenta Mattress
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
