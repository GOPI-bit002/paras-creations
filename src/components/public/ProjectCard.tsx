import type { Project } from "@/types";
import { formatDate } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  const isOngoing = project.status === "Ongoing";
  const isGov = project.clientType === "Government";

  return (
    <article className="card group overflow-hidden hover:-translate-y-1 hover:shadow-gold">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`chip ${
              isGov
                ? "bg-brand-gold text-brand-black"
                : "bg-white text-brand-black"
            }`}
          >
            {project.clientType}
          </span>
          <span
            className={`chip ${
              isOngoing
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-display font-bold text-lg leading-tight">
            {project.name}
          </h3>
          <div className="text-xs text-white/80 mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            {project.location}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
          {project.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="text-gray-400 uppercase tracking-wider">Started</div>
            <div className="text-brand-black font-semibold">
              {formatDate(project.startDate)}
            </div>
          </div>
          <div>
            <div className="text-gray-400 uppercase tracking-wider">
              {isOngoing ? "Target" : "Completed"}
            </div>
            <div className="text-brand-black font-semibold">
              {isOngoing ? "In progress" : formatDate(project.endDate || "")}
            </div>
          </div>
        </div>

        {isOngoing && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-semibold text-brand-black">Progress</span>
              <span className="text-brand-gold font-bold">{project.progress}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-gold to-brand-goldlight rounded-full transition-all"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
