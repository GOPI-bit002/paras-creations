import AdminHeader from "@/components/admin/AdminHeader";
import StatCard from "@/components/admin/StatCard";
import { employees } from "@/data/employees";
import { projects } from "@/data/projects";
import { inventory } from "@/data/inventory";
import { enquiries } from "@/data/enquiries";
import { company } from "@/data/company";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function AdminDashboard() {
  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");
  const pending = enquiries.filter((e) => e.status !== "Closed");
  const newEnquiries = enquiries.filter((e) => e.status === "New");
  const activeSites = new Set(ongoing.map((p) => p.location)).size;
  const activeEmployees = employees.filter((e) => e.status === "Active").length;
  const presentToday = employees.filter((e) => e.attendance === "Present").length;

  const lowStock = inventory.filter(
    (i) => i.available / Math.max(i.total, 1) < 0.25
  );

  return (
    <div>
      <AdminHeader
        title="Dashboard Overview"
        description="Live snapshot of projects, people, inventory, and enquiries."
      />

      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-black via-brand-gray to-brand-black text-white p-6 sm:p-8 mb-8">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Welcome back, {company.owner}
            </div>
            <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-3xl">
              Here&apos;s what&apos;s happening today.
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-md">
              {presentToday} of {activeEmployees} team members are on site.{" "}
              {newEnquiries.length} new enquiries need a follow-up.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/enquiries"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              Review Enquiries
            </Link>
            <Link href="/admin/projects" className="btn-outline !px-4 !py-2 text-sm">
              Manage Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard label="Total Employees" value={activeEmployees} icon="👥" accent="gold" hint={`${presentToday} present`} />
        <StatCard label="Ongoing Projects" value={ongoing.length} icon="🏗️" accent="black" />
        <StatCard label="Completed" value={completed.length} icon="✓" accent="green" />
        <StatCard label="Inventory Items" value={inventory.length} icon="📦" accent="blue" hint={lowStock.length > 0 ? `${lowStock.length} low-stock` : "All stocked"} />
        <StatCard label="Pending Enquiries" value={pending.length} icon="✉️" accent="red" hint={`${newEnquiries.length} new`} />
        <StatCard label="Active Sites" value={activeSites} icon="📍" accent="gold" />
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        {/* Ongoing projects */}
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display font-bold text-lg text-brand-black">
                Ongoing Projects
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Real-time progress across all active sites.
              </p>
            </div>
            <Link href="/admin/projects" className="text-xs text-brand-gold font-semibold hover:underline">
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {ongoing.slice(0, 5).map((p) => (
              <div
                key={p.id}
                className="border border-gray-100 rounded-lg p-4 hover:border-brand-gold/40 hover:bg-brand-soft transition-colors"
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-brand-black truncate">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      <span
                        className={`chip mr-1 ${
                          p.clientType === "Government"
                            ? "bg-brand-gold text-brand-black"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {p.clientType}
                      </span>
                      {p.location}
                    </div>
                  </div>
                  <span className="text-brand-gold font-bold text-lg flex-shrink-0">
                    {p.progress}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-gold to-brand-goldlight rounded-full transition-all"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: recent enquiries + low stock */}
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-lg text-brand-black">
                Recent Enquiries
              </h3>
              <Link href="/admin/enquiries" className="text-xs text-brand-gold font-semibold hover:underline">
                View all →
              </Link>
            </div>
            <div className="space-y-2.5">
              {enquiries.slice(0, 4).map((e) => (
                <div
                  key={e.id}
                  className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2.5 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-brand-black truncate">
                      {e.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {e.projectType}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
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

          {lowStock.length > 0 && (
            <div className="card p-6 border-amber-200 bg-amber-50/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                  <h3 className="font-display font-bold text-sm text-amber-900">
                    Low Stock Alerts
                  </h3>
                </div>
                <Link href="/admin/inventory" className="text-xs text-brand-gold font-semibold hover:underline">
                  Restock →
                </Link>
              </div>
              <div className="space-y-2 text-sm">
                {lowStock.slice(0, 4).map((i) => (
                  <div key={i.id} className="flex justify-between">
                    <span className="text-brand-black font-medium truncate">{i.name}</span>
                    <span className="text-amber-700 font-semibold">
                      {i.available} {i.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
