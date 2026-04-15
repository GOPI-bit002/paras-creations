import { motion } from "framer-motion";
import {
  Award,
  BadgeIndianRupee,
  ShieldCheck,
  Timer,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    text: "Handpicked materials and finishes that feel as good as they look.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    text: "Luxury comfort that fits any budget — honest pricing, no gimmicks.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Manufacturer",
    text: "Proudly powered by Spenta Mattress — a name built on trust.",
  },
  {
    icon: Timer,
    title: "Long-lasting Comfort",
    text: "Engineered to hold shape and support for years of restful sleep.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    text: "Personalised guidance, fast delivery, and reliable after-sales care.",
  },
  {
    icon: Sparkles,
    title: "Craftsmanship",
    text: "Quilted tops, breathable layers, and refined stitching details.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-beige/50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="heading mt-3">Built for comfort. Made for trust.</h2>
          <p className="subheading mt-4">
            Every mattress and pillow is chosen with one goal in mind — helping
            you sleep deeper and wake up happier.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-7 border border-ink/5 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-softblue/60 text-midblue flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
