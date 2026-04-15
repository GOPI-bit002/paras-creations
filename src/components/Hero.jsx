import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-24"
    >
      {/* Decorative floating blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-max w-full relative z-10 px-6 md:px-10 lg:px-16 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-brand-100 text-sm text-brand-700 font-medium shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Comfort You Can Trust
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-slate-900"
            >
              Shri Naina{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Enterprises
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
            >
              Premium Mattresses & Pillows for Better Sleep. Experience luxurious
              comfort crafted for your restful nights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="btn-primary"
              >
                Contact Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                href="#products"
                onClick={(e) => scrollTo(e, '#products')}
                className="btn-secondary"
              >
                Explore Products
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-brand-gradient flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    {['A', 'R', 'M', 'S'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Trusted by 1000+ customers</div>
                <div className="text-slate-500">Rated 4.9/5 for comfort</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card bg-white p-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-100 via-accent-100 to-white flex items-center justify-center relative overflow-hidden">
                {/* Stylized bed/mattress illustration using pure CSS */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 space-y-3">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-16 rounded-2xl bg-white shadow-card flex items-center justify-center gap-3 px-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent-300 opacity-70"></div>
                      <div className="w-10 h-10 rounded-full bg-brand-300 opacity-70"></div>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-36 rounded-2xl bg-gradient-to-br from-white to-brand-50 shadow-card border border-brand-100/60"
                    >
                      <div className="h-full flex flex-col justify-between p-4">
                        <div className="flex gap-2">
                          <div className="h-2 w-16 rounded-full bg-brand-200"></div>
                          <div className="h-2 w-8 rounded-full bg-accent-200"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 w-full rounded-full bg-slate-100"></div>
                          <div className="h-1.5 w-3/4 rounded-full bg-slate-100"></div>
                          <div className="h-1.5 w-1/2 rounded-full bg-slate-100"></div>
                        </div>
                      </div>
                    </motion.div>
                    <div className="h-6 rounded-full bg-slate-800/10"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-slate-500 font-semibold">
                  Sleep Better
                </div>
                <div className="absolute top-6 right-6 text-xs uppercase tracking-widest text-brand-700 font-semibold">
                  Premium Comfort
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 top-10 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-soft px-4 py-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-500">Happy</div>
                <div className="text-sm font-bold text-slate-900">Customers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-2 bottom-10 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-soft px-4 py-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center text-accent-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-500">Trusted</div>
                <div className="text-sm font-bold text-slate-900">Quality</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
