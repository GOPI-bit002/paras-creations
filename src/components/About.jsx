import { motion } from "framer-motion";
import spentaLogo from "../assets/spenta-logo.svg";
import m3 from "../assets/m3.svg";

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="section grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-premium">
            <img src={m3} alt="Crafted comfort" className="w-full h-full object-cover" />
            <img
              src={spentaLogo}
              alt="Spenta Mattress"
              className="absolute top-4 right-4 w-[54px] opacity-80"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card px-5 py-4 border border-ink/5">
            <div className="text-3xl font-display font-semibold text-ink">10+</div>
            <div className="text-xs text-muted tracking-wide">Years of Trust</div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">About Us</span>
          <h2 className="heading mt-3">
            Crafting comfort for healthier living.
          </h2>
          <p className="subheading mt-5">
            Shree Naina Enterprises is committed to providing premium mattresses
            and pillows designed for better sleep and healthier living. From
            soft-to-firm support, breathable fabrics, and orthopaedic build — we
            bring you products that care for you, night after night.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
            <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-soft">
              <div className="font-display text-2xl font-semibold text-ink">100%</div>
              <div className="text-xs text-muted mt-1">Quality Assured</div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-soft">
              <div className="font-display text-2xl font-semibold text-ink">1000+</div>
              <div className="text-xs text-muted mt-1">Happy Customers</div>
            </div>
          </div>

          <p className="mt-8 text-xs sm:text-sm text-midblue tracking-[0.12em]">
            Products manufactured by{" "}
            <span className="font-semibold">Spenta Mattress</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
