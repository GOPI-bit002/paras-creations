import AdminHeader from "@/components/admin/AdminHeader";
import StatCard from "@/components/admin/StatCard";
import { employees } from "@/data/employees";
import { projects } from "@/data/projects";
import { inventory } from "@/data/inventory";
import { enquiries } from "@/data/enquiries";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function AdminDashboard() {
  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");
  const pending = enquiries.filter((e) => e.status !== "Closed");
  const activeSites = new Set(ongoing.map((p) => p.location)).size;
  const activeEmployees = employees.filter((e) => e.status === "Active").length;

  return (
    <div>
      <AdminHeader
        title="Dashboard Overview"
        description="Live snapshot of projects, people, inventory, and enquiries."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard label="Total Employees" value={activeEmployees} icon="👥" accent="gold" />
        <StatCard label="Ongoing Projects" value={ongoing.length} icon="🏗️" accent="black" />
        <StatCard label="Completed" value={completed.length} icon="✓" accent="green" />
        <StatCard label="Inventory Items" value={inventory.length} icon="📦" accent="blue" />
        <StatCard label="Pending Enquiries" value={pending.length} icon="✉️" accent="red" />
        <StatCard label="Active Sites" value={activeSites} icon="📍" accent="gold" />
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        {/* Ongoing projects */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-bold text-lg text-brand-black">
              Ongoing Projects
            </h3>
            <Link href="/admin/projects" className="text-xs text-brand-gold font-semibold">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {ongoing.slice(0, 4).map((p) => (
              <div key={p.id} className="border border-gray-100 rounded-lg p-3">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <div className="font-semibold text-sm text-brand-black">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {p.location} · {p.clientType}
                    </div>
                  </div>
                  <span className="text-brand-gold font-bold text-sm">
                    {p.progress}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-gold to-brand-goldlight rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent enquiries */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-bold text-lg text-brand-black">
              Recent Enquiries
            </h3>
            <Link href="/admin/enquiries" className="text-xs text-brand-gold font-semibold">
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {enquiries.slice(0, 5).map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2.5"
              >
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-brand-black truncate">
                    {e.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {e.projectType} · {e.location}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`chip ${
                      e.status === "New"
                        ? "bg-yellow-100 text-yellow-800"
                        : e.status === "Contacted"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {e.status}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    {formatDate(e.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
