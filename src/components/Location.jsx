import { motion } from 'framer-motion'

const MAP_LINK = 'https://maps.apple/p/bcX6SrF9eRNG4Z'

export default function Location() {
  return (
    <section id="location" className="section-padding bg-gradient-to-b from-white to-brand-50/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold">
            Our Location
          </span>
          <h2 className="section-title mt-4">
            Visit our{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              showroom
            </span>
          </h2>
          <p className="section-subtitle text-center">
            Come explore our collection in person and feel the difference of
            premium comfort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-card border border-slate-100 bg-white"
        >
          <div className="grid lg:grid-cols-5">
            {/* Map visual side */}
            <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-brand-100 via-accent-50 to-brand-50 overflow-hidden">
              {/* Stylized map background */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5b67f0" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M0,150 Q100,100 200,150 T400,150" fill="none" stroke="#5b67f0" strokeWidth="2" opacity="0.3" />
                  <path d="M0,200 Q100,250 200,200 T400,200" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
                  <path d="M150,0 Q200,150 150,300" fill="none" stroke="#5b67f0" strokeWidth="2" opacity="0.3" />
                  <path d="M250,0 Q300,150 250,300" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
                </svg>
              </div>

              {/* Pin marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-brand-500"
                  />
                  <div className="relative w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center shadow-card">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3" fill="#5b67f0"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900">Shri Naina Enterprises</div>
                    <div className="text-xs text-slate-500 truncate">Tap below to get directions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info / CTA side */}
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Find us easily
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  We're just a click away. Use the button below to open the
                  location directly in your maps app and get turn-by-turn directions.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-slate-700">Easy parking available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-slate-700">Walk-ins welcome</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-slate-700">Expert staff on-site</span>
                  </li>
                </ul>
              </div>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-8 !py-3.5"
              >
                View Location
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
