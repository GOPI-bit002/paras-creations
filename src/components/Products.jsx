import { useState } from 'react'
import { motion } from 'framer-motion'

const MATTRESSES = [
  {
    src: '/images/mattress-1.jpg',
    name: 'Royal Black Series',
    tag: 'Premium',
    description: 'Luxurious black finish with copper swirl patterns. Engineered for deep, orthopedic support.',
  },
  {
    src: '/images/mattress-2.jpg',
    name: 'Ocean Blue Comfort',
    tag: 'Best Seller',
    description: 'Cool navy blue design with breathable fabric — perfect for a refreshing night\'s sleep.',
  },
  {
    src: '/images/mattress-3.jpg',
    name: 'Violet Dream',
    tag: 'New Arrival',
    description: 'Stylish violet with coral accents. Soft yet supportive for all sleeping positions.',
  },
  {
    src: '/images/mattress-4.jpg',
    name: 'Classic Grey Supreme',
    tag: 'Trending',
    description: 'Timeless gray striped mattress with firm support and durable craftsmanship.',
  },
]

const PillowIllustration = (
  <div className="flex flex-col items-center gap-3 w-4/5">
    <div className="w-full h-24 rounded-[2.5rem] bg-white shadow-card border border-accent-100 flex items-center justify-center gap-3 px-5">
      <div className="w-12 h-12 rounded-full bg-accent-200"></div>
      <div className="flex-1 space-y-2">
        <div className="h-2 rounded-full bg-slate-200 w-3/4"></div>
        <div className="h-2 rounded-full bg-slate-100 w-1/2"></div>
      </div>
    </div>
    <div className="w-3/4 h-16 rounded-[2rem] bg-white/80 shadow-soft border border-brand-100"></div>
  </div>
)

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-gradient-to-br from-brand-100 to-accent-100 text-brand-700`}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span className="mt-2 text-xs font-semibold">Add {src.split('/').pop()}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}

function scrollToContact(e) {
  e.preventDefault()
  const el = document.querySelector('#contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Products() {
  const [activeMattress, setActiveMattress] = useState(0)
  const current = MATTRESSES[activeMattress]

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white via-brand-50/30 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold">
            Our Products
          </span>
          <h2 className="section-title mt-4">
            Built for{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">ultimate comfort</span>
          </h2>
          <p className="section-subtitle text-center">
            Discover our carefully curated range of mattresses and pillows — engineered to give you the sleep you deserve.
          </p>
        </motion.div>

        {/* Two main product cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {/* MATTRESSES card with image gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card border border-slate-100 transition-shadow duration-300"
          >
            <div className="aspect-[5/4] bg-gradient-to-br from-slate-50 to-brand-50 relative overflow-hidden">
              <motion.div
                key={activeMattress}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center p-6"
              >
                <ImageWithFallback
                  src={current.src}
                  alt={current.name}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-brand-700">
                {current.tag}
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">Mattresses</h3>
                  <div className="text-sm text-brand-600 font-semibold mt-0.5">{current.name}</div>
                </div>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">{current.description}</p>

              {/* Thumbnail selector */}
              <div className="mt-5 grid grid-cols-4 gap-2">
                {MATTRESSES.map((m, i) => (
                  <button
                    key={m.src}
                    onClick={() => setActiveMattress(i)}
                    aria-label={m.name}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      activeMattress === i
                        ? 'border-brand-500 ring-2 ring-brand-200 scale-105'
                        : 'border-slate-200 hover:border-brand-300'
                    }`}
                  >
                    <ImageWithFallback
                      src={m.src}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <a href="#contact" onClick={scrollToContact} className="btn-primary w-full mt-6 !py-3">
                Enquire Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* PILLOWS card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card border border-slate-100 transition-shadow duration-300"
          >
            <div className="aspect-[5/4] bg-gradient-to-br from-accent-100 via-accent-50 to-white flex items-center justify-center relative overflow-hidden">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                {PillowIllustration}
              </motion.div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-brand-700">
                Premium
              </div>
            </div>

            <div className="p-7">
              <h3 className="font-display text-2xl font-bold text-slate-900">Pillows</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Soft, supportive pillows crafted from high-quality materials that cradle your head and neck all night long.
              </p>

              <ul className="mt-5 space-y-2">
                {['Memory foam & fiber', 'Hypoallergenic fabric', 'Neck-friendly support'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" onClick={scrollToContact} className="btn-primary w-full mt-6 !py-3">
                Enquire Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mattress Collection Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Our Mattress{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">Collection</span>
            </h3>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Explore our full range — each crafted with Spenta's signature comfort technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATTRESSES.map((m, i) => (
              <motion.div
                key={m.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card border border-slate-100 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-50 to-brand-50/60 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <ImageWithFallback
                      src={m.src}
                      alt={m.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-brand-700 uppercase tracking-wider">
                    {m.tag}
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-display font-bold text-slate-900">{m.name}</div>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Powered by Spenta Mattress with real logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl shadow-soft border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Product Brand Partnership
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900">
                Powered by{' '}
                <span className="bg-brand-gradient bg-clip-text text-transparent">Spenta Mattress</span>
              </div>
              <p className="mt-3 text-slate-600 max-w-xl">
                We proudly partner with Spenta Mattress — <em>Comfortable Mattress, Comfortable Sleep</em> —
                to bring you industry-leading quality, trusted by thousands across India.
              </p>
            </div>

            {/* Real Spenta Logo */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="bg-white rounded-2xl p-3 shadow-soft border border-slate-100 max-w-xs mx-auto">
                <ImageWithFallback
                  src="/images/spenta-logo.png"
                  alt="Spenta Mattress Logo"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
