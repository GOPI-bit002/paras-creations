import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-white to-accent-100 flex items-center justify-center">
              <div className="w-3/4 space-y-4">
                <div className="h-4 rounded-full bg-brand-200/70"></div>
                <div className="h-32 rounded-2xl bg-white shadow-soft border border-brand-100/60 p-4">
                  <div className="flex gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gradient"></div>
                    <div className="flex-1">
                      <div className="h-2 w-24 rounded-full bg-slate-200 mb-2"></div>
                      <div className="h-1.5 w-16 rounded-full bg-slate-100"></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full bg-slate-100"></div>
                    <div className="h-1.5 rounded-full bg-slate-100 w-5/6"></div>
                    <div className="h-1.5 rounded-full bg-slate-100 w-2/3"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-accent-100"></div>
                  <div className="h-16 rounded-xl bg-brand-100"></div>
                  <div className="h-16 rounded-xl bg-accent-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-gradient rounded-2xl p-6 shadow-card text-white hidden md:block">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm opacity-90">Years of Trust</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold">
            About Us
          </span>
          <h2 className="section-title mt-4">
            Crafted for{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              restful nights
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We provide high-quality mattresses and pillows designed for comfort and
            durability. Partnered with trusted brands like{' '}
            <span className="font-semibold text-brand-700">Spenta Mattress</span>,
            we ensure better sleep for every customer.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Premium Quality', desc: 'Carefully selected materials' },
              { title: 'Trusted Partners', desc: 'Certified brand collaborations' },
              { title: 'Fair Pricing', desc: 'Affordable for every budget' },
              { title: 'Happy Customers', desc: 'Dedicated after-sales care' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-3 items-start"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-soft">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
