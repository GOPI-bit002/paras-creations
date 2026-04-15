import { motion } from 'framer-motion'

const FEATURES = [
  {
    title: 'Premium Quality',
    description: 'Every product is inspected to meet the highest comfort and durability standards.',
    color: 'from-brand-500 to-brand-600',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    description: 'Fair, transparent prices on all mattresses and pillows — no hidden charges.',
    color: 'from-accent-500 to-accent-600',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: 'Trusted Brand',
    description: 'Proudly powered by Spenta Mattress — a trusted name known for excellence.',
    color: 'from-brand-500 to-accent-500',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'We go the extra mile to ensure every customer rests easy with our service.',
    color: 'from-accent-500 to-brand-500',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M16 10h.01"></path>
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-brand-50/50 via-white to-accent-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand-700 text-sm font-semibold shadow-sm">
            Why Choose Us
          </span>
          <h2 className="section-title mt-4">
            Reasons people{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              love us
            </span>
          </h2>
          <p className="section-subtitle text-center">
            Everything we do is designed to give you the most comfortable and
            trustworthy buying experience.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
