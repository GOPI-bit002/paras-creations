"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-24 lg:pt-36 pb-10">
        {/* Massive headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-anton uppercase text-white tracking-tighter leading-none mb-10"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Let&apos;s
          <br />
          Create
        </motion.h2>

        {/* Email link */}
        <motion.a
          href={`mailto:${company.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-jakarta text-sage hover:text-white transition-colors duration-500 block mb-24 underline underline-offset-8"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
        >
          {company.email}
        </motion.a>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-24 border-t border-white/10 pt-16">
          {company.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-anton text-4xl text-white">{stat.value}</p>
              <p className="font-jakarta text-taupe text-xs uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-jakarta text-white/40 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Admin", href: "/admin" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-jakarta text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
