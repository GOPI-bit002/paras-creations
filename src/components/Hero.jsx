import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroMattress from "../assets/m4.svg";
import spentaLogo from "../assets/spenta-logo.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-gradient pt-28 sm:pt-32 pb-20 sm:pb-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-softblue/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sand/60 blur-3xl" />

      <div className="section !py-0 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <span className="eyebrow">Premium Sleep, Crafted for You</span>
          <h1 className="heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Sleep Better,
            <br />
            <span className="text-midblue">Live Better.</span>
          </h1>
          <p className="subheading mt-6 max-w-xl">
            Premium Mattresses &amp; Pillows for ultimate comfort — designed to
            cradle your body, restore your nights, and elevate every morning.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#products" className="btn-primary">
              Explore Products <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Phone size={15} /> Contact Us
            </a>
          </div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-2">
              {["#CFDDE8", "#E4D9C6", "#EFE7DA"].map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-soft"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-xs text-muted mt-1">
                Trusted by families across Himachal Pradesh
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[32px] overflow-hidden shadow-premium bg-white">
            <img
              src={heroMattress}
              alt="Premium luxury mattress"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Watermark */}
            <img
              src={spentaLogo}
              alt="Spenta Mattress"
              className="absolute top-4 right-4 w-[60px] sm:w-[70px] opacity-80 drop-shadow"
            />
          </div>

          {/* Floating info card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl shadow-card px-5 py-4 gap-3 items-center border border-white"
          >
            <div className="w-10 h-10 rounded-full bg-softblue flex items-center justify-center">
              <Star size={18} className="text-midblue" fill="currentColor" strokeWidth={0} />
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">5-Star Comfort</div>
              <div className="text-xs text-muted">Premium build & feel</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
