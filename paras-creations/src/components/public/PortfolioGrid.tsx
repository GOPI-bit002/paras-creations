"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function HoverReveal() {
  return (
    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
        <span className="font-anton text-[13px] tracking-widest text-navy">VIEW</span>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="py-24 lg:py-36 bg-white cursor-crosshair">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-anton uppercase text-navy tracking-tighter leading-none mb-16 md:mb-24"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Selected
          <br />
          Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              style={{ marginTop: i % 2 === 1 ? "4rem" : "0" }}
              className="group cursor-pointer"
            >
              <Link href="/projects">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <HoverReveal />
                </div>
                <div className="pt-4 pb-2">
                  <p className="font-jakarta text-taupe text-xs uppercase tracking-widest">
                    {project.clientType}
                  </p>
                  <h3 className="font-jakarta font-semibold text-navy mt-1 text-base">
                    {project.name}
                  </h3>
                  <p className="font-jakarta text-taupe text-sm mt-0.5">{project.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
