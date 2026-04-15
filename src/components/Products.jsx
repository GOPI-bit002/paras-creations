import { motion } from "framer-motion";
import ProductCard from "./ProductCard.jsx";
import m1 from "../assets/m1.svg";
import m2 from "../assets/m2.svg";
import m3 from "../assets/m3.svg";
import m4 from "../assets/m4.svg";
import m5 from "../assets/m5.svg";
import m6 from "../assets/m6.svg";

const products = [
  {
    image: m1,
    name: "Comfort Rest Mattress",
    description: "High comfort & durable build",
  },
  {
    image: m2,
    name: "Premium Foam Mattress",
    description: "High comfort & durable build",
  },
  {
    image: m3,
    name: "Ortho Support Mattress",
    description: "High comfort & durable build",
  },
  {
    image: m4,
    name: "Luxury Memory Foam",
    description: "High comfort & durable build",
  },
  {
    image: m5,
    name: "Dual Comfort Pillow",
    description: "High comfort & durable build",
  },
  {
    image: m6,
    name: "King Size Mattress",
    description: "High comfort & durable build",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-section-fade">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Our Collection</span>
          <h2 className="heading mt-3">
            Premium Mattresses &amp; Pillows
          </h2>
          <p className="subheading mt-4">
            Explore a carefully curated range — engineered for support,
            crafted for comfort, and built to last.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
