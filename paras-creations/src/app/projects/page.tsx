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
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = projects;
    if (filter !== "All") {
      if (filter === "Ongoing" || filter === "Completed") {
        list = list.filter((p) => p.status === filter);
      } else {
        list = list.filter((p) => p.clientType === filter);
      }
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [filter, query]);

  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");

  const stats = [
    { label: "Ongoing", value: ongoing.length },
    { label: "Completed", value: completed.length },
    {
      label: "Government",
      value: projects.filter((p) => p.clientType === "Government").length
    },
    {
      label: "Private",
      value: projects.filter((p) => p.clientType === "Private").length
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-black text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/90 to-brand-black/70" />
          </div>
          <div
            className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
              <span className="gold-divider" /> Our Work
            </div>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              A portfolio of structures we are proud of.
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl text-lg">
              Ongoing and completed projects — government and private — across
              Punjab and North India.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm"
                >
                  <div className="text-brand-gold font-display font-extrabold text-2xl">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-premium">
            <SectionTitle
              eyebrow="Portfolio"
              title="Browse our projects"
              subtitle="Filter by category or status, or search by name and location."
              align="left"
            />

            {/* Filter + search bar */}
            <div className="mt-8 flex flex-col lg:flex-row lg:items-center gap-4 bg-brand-soft border border-gray-100 rounded-xl p-3">
              <div className="flex flex-wrap gap-2 flex-1">
                {(["All", "Ongoing", "Completed", "Government", "Private"] as Filter[]).map(
                  (f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
                        filter === f
                          ? "bg-brand-black text-brand-gold border-brand-black shadow-premium"
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-gold hover:text-brand-black"
                      }`}
                    >
                      {f}
                    </button>
                  )
                )}
              </div>
              <div className="relative">
                <svg
                  className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 5 1.49-1.5-5-4.99zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full lg:w-64 bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Showing <span className="font-semibold text-brand-black">{filtered.length}</span>{" "}
              of {projects.length} projects
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 text-center text-gray-500 py-10 border border-dashed border-gray-200 rounded-xl">
                <div className="text-4xl mb-2">🔍</div>
                <div>No projects match your search or filter.</div>
                <button
                  onClick={() => {
                    setFilter("All");
                    setQuery("");
                  }}
                  className="mt-4 text-sm text-brand-gold font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
