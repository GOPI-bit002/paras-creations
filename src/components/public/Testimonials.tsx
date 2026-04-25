"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const AVATAR_COLORS = ["#b7c6c2", "#d5f4f9", "#bbe2f5"];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-36 bg-charcoal overflow-hidden">
      {/* Decorative oversized quotation mark */}
      <div
        className="absolute -top-16 left-6 font-anton select-none pointer-events-none"
        style={{ fontSize: "30rem", color: "#171e19", opacity: 0.3, lineHeight: 1 }}
        aria-hidden="true"
      >
        &#8220;
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-anton uppercase text-white leading-tight tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            &#8220;{testimonials[active].quote}&#8221;
          </motion.blockquote>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`bio-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 flex items-center gap-5"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: AVATAR_COLORS[active % AVATAR_COLORS.length] }}
            >
              <span className="font-anton text-navy text-sm">
                {testimonials[active].initials}
              </span>
            </div>
            <div>
              <p className="font-anton text-white text-base uppercase tracking-widest">
                {testimonials[active].name}
              </p>
              <p className="font-jakarta text-taupe text-sm mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <div className="mt-10 flex items-center gap-6">
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-500 cursor-pointer ${
                  i === active ? "bg-white w-10" : "bg-white/30 w-5"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
