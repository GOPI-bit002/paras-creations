import { motion } from 'framer-motion'

export default function ProductCard({ product, index }) {
  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card border border-slate-100 transition-shadow duration-300"
    >
      <div className={`aspect-[5/4] ${product.bg} flex items-center justify-center relative overflow-hidden`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-4/5"
        >
          {product.illustration}
        </motion.div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-brand-700">
          {product.tag}
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-display text-2xl font-bold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          {product.description}
        </p>

        <ul className="mt-5 space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="btn-primary w-full mt-6 !py-3"
        >
          Enquire Now
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}
