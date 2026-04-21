"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Capabilities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-36 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left 4 cols: label + capability list */}
          <div className="col-span-12 lg:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-jakarta text-taupe text-xs uppercase tracking-widest mb-10"
            >
              Capabilities
            </motion.p>
            <ul>
              {services.map((service, i) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(service.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-4 py-4 border-b border-navy/10 cursor-pointer group"
                >
                  <span
                    className="h-px bg-navy/40 transition-all duration-500 flex-shrink-0"
                    style={{ width: hovered === service.id ? "64px" : "40px" }}
                  />
                  <span className="font-jakarta text-navy text-sm font-medium group-hover:text-navy/50 transition-colors duration-300">
                    {service.title}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right 8 cols: large light heading with italic taupe accents */}
          <div className="col-span-12 lg:col-span-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-jakarta font-light text-navy leading-snug"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.75rem)" }}
              >
                Building what{" "}
                <em className="text-taupe not-italic">Punjab</em>{" "}
                needs — from roads and schools to luxury{" "}
                <em className="text-taupe not-italic">residences</em>{" "}
                and commercial{" "}
                <em className="text-taupe not-italic">spaces.</em>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
