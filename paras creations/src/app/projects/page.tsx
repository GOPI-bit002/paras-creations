"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import SectionTitle from "@/components/public/SectionTitle";
import ProjectCard from "@/components/public/ProjectCard";
import { projects } from "@/data/projects";

type Filter = "All" | "Ongoing" | "Completed" | "Government" | "Private";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Ongoing" || filter === "Completed") {
      return projects.filter((p) => p.status === filter);
    }
    return projects.filter((p) => p.clientType === filter);
  }, [filter]);

  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-black text-white py-20 relative overflow-hidden">
          <div
            className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
              Our Work
            </div>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              A portfolio of structures we are proud of.
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl text-lg">
              Ongoing and completed projects — government and private — across
              Punjab and North India.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-brand-gold font-bold text-2xl">
                  {ongoing.length}
                </div>
                <div className="text-xs text-white/60">Ongoing</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-brand-gold font-bold text-2xl">
                  {completed.length}
                </div>
                <div className="text-xs text-white/60">Completed</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-brand-gold font-bold text-2xl">
                  {projects.filter((p) => p.clientType === "Government").length}
                </div>
                <div className="text-xs text-white/60">Government</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-brand-gold font-bold text-2xl">
                  {projects.filter((p) => p.clientType === "Private").length}
                </div>
                <div className="text-xs text-white/60">Private</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <SectionTitle
                eyebrow="Portfolio"
                title="All Projects"
                subtitle="Filter by category or status."
                align="left"
              />
              <div className="flex flex-wrap gap-2">
                {(["All", "Ongoing", "Completed", "Government", "Private"] as Filter[]).map(
                  (f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
                        filter === f
                          ? "bg-brand-black text-brand-gold border-brand-black"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-gold hover:text-brand-black"
                      }`}
                    >
                      {f}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 text-center text-gray-500">
                No projects match this filter.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
