import { motion } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

const MattressIllustration = (
  <div className="space-y-2">
    <div className="h-4 rounded-full bg-white/70 w-1/2 mx-auto"></div>
    <div className="h-36 md:h-40 rounded-2xl bg-white shadow-card border border-brand-100 p-4 flex flex-col justify-between">
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-xl bg-brand-200"></div>
        <div className="flex-1 space-y-2">
          <div className="h-2 rounded-full bg-slate-200 w-3/4"></div>
          <div className="h-2 rounded-full bg-slate-100 w-1/2"></div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 rounded-full bg-slate-100"></div>
        <div className="h-1.5 rounded-full bg-slate-100 w-5/6"></div>
        <div className="h-1.5 rounded-full bg-slate-100 w-2/3"></div>
      </div>
    </div>
    <div className="h-3 rounded-full bg-slate-800/10 w-5/6 mx-auto"></div>
  </div>
)

const PillowIllustration = (
  <div className="flex flex-col items-center gap-3">
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

const products = [
  {
    name: 'Mattresses',
    tag: 'Best Seller',
    description: 'Orthopedic and luxury mattresses designed for deep, rejuvenating sleep. Multiple sizes and comfort levels available.',
    bg: 'bg-gradient-to-br from-brand-100 via-brand-50 to-white',
    illustration: MattressIllustration,
    features: ['Ortho & Spring options', 'Multiple size variants', 'Durable construction'],
  },
  {
    name: 'Pillows',
    tag: 'Premium',
    description: 'Soft, supportive pillows crafted from high-quality materials that cradle your head and neck all night long.',
    bg: 'bg-gradient-to-br from-accent-100 via-accent-50 to-white',
    illustration: PillowIllustration,
    features: ['Memory foam & fiber', 'Hypoallergenic fabric', 'Neck-friendly support'],
  },
]

export default function Products() {
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
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              ultimate comfort
            </span>
          </h2>
          <p className="section-subtitle text-center">
            Discover our carefully curated range of mattresses and pillows —
            engineered to give you the sleep you deserve.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>

        {/* Powered by Spenta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl shadow-soft border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Product Brand Partnership
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900">
                Powered by{' '}
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Spenta Mattress
                </span>
              </div>
              <p className="mt-2 text-slate-600 max-w-xl">
                We proudly partner with Spenta Mattress to bring you
                industry-leading quality, trusted by thousands across India.
              </p>
            </div>

            {/* Spenta Mattress Logo */}
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-2xl p-6 shadow-soft border border-brand-100/60">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-soft">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"></path>
                      <path d="M2 11h20v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7z"></path>
                      <path d="M6 4v3"></path>
                      <path d="M18 4v3"></path>
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
                      SPENTA
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-brand-600 font-semibold">
                      Mattress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
