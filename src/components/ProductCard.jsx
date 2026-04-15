import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import spentaLogo from "../assets/spenta-logo.svg";

export default function ProductCard({ image, name, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 border border-ink/5"
    >
      {/* Image wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden bg-beige/40 rounded-t-3xl">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Watermark */}
        <img
          src={spentaLogo}
          alt="Spenta Mattress"
          className="absolute top-3 right-3 w-[48px] sm:w-[54px] opacity-80 drop-shadow-sm pointer-events-none select-none"
        />
        {/* soft overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-xl sm:text-[22px] font-semibold text-ink leading-snug">
          {name}
        </h3>
        <p className="mt-2 text-sm text-muted">{description}</p>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink border-b border-ink/20 pb-0.5 hover:text-midblue hover:border-midblue transition-colors"
        >
          Enquire Now <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}
