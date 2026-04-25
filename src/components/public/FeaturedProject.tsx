"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.status === "Completed") ?? projects[0];

  return (
    <section className="py-24 lg:py-36 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: grayscale image with cyan decorative offset square */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="absolute -top-12 -left-12 w-3/4 h-3/4 z-0 pointer-events-none"
              style={{ background: "#d5f4f9", opacity: 0.2 }}
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden aspect-[4/5]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <span className="font-anton text-sage text-sm uppercase tracking-widest">
              Featured Project
            </span>
            <h2
              className="font-anton uppercase text-white leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              {featured.name}
            </h2>
            <p className="font-jakarta font-light text-taupe leading-relaxed text-base">
              {featured.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-jakarta text-taupe text-xs uppercase tracking-widest">
                {featured.location}
              </span>
              <span className="text-taupe/40 text-xs">—</span>
              <span className="font-jakarta text-taupe text-xs uppercase tracking-widest font-semibold">
                {featured.budget}
              </span>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-white font-jakarta text-sm uppercase tracking-widest mt-2 w-fit cursor-pointer"
            >
              View All Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
