"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-navy overflow-hidden flex flex-col cursor-crosshair">
      {/* Ambient floating orb — sage */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage opacity-20 blur-[120px] animate-float pointer-events-none"
        aria-hidden="true"
      />
      {/* Ambient floating orb — soft blue, delayed */}
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] animate-float pointer-events-none"
        style={{ background: "#bbe2f5", animationDelay: "3s" }}
        aria-hidden="true"
      />

      {/* Central hero text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-anton uppercase tracking-tighter leading-[0.85] text-white"
          style={{ fontSize: "clamp(4rem, 18vw, 18vw)" }}
        >
          PARAS
          <br />
          <span className="text-outline">CREATIONS</span>
        </motion.h1>
      </div>

      {/* Bottom descriptor row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between px-8 md:px-12 lg:px-16 pb-10 md:pb-14"
      >
        <p className="font-jakarta font-light text-taupe text-xs uppercase tracking-widest max-w-xs leading-relaxed">
          Premier Construction &amp; Infrastructure — Government &amp; Private Projects
          Across Punjab, India
        </p>
        <div className="w-14 h-14 rounded-full border border-sage/40 flex items-center justify-center animate-bounce-slow flex-shrink-0">
          <svg
            className="w-5 h-5 text-sage"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
