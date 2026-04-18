"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import { projects as seed } from "@/data/projects";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/types";

export default function ProjectsAdminPage() {
  const [rows, setRows] = useState<Project[]>(seed);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Ongoing" | "Completed" | "Government" | "Private">(
    "All"
  );

  const filtered = rows.filter((r) => {
    if (filter === "All") return true;
    if (filter === "Ongoing" || filter === "Completed") return r.status === filter;
    return r.clientType === filter;
  });

  const save = (p: Project) => {
    setRows((r) => {
      const exists = r.find((x) => x.id === p.id);
      if (exists) return r.map((x) => (x.id === p.id ? p : x));
      return [p, ...r];
    });
    setShowForm(false);
    setEditing(null);
  };

  const del = (id: string) => {
    if (confirm("Delete this project?")) {
      setRows((r) => r.filter((x) => x.id !== id));
    }
  };

  const columns: Column<Project>[] = [
    { key: "id", header: "ID" },
    {
      key: "name",
      header: "Project",
      render: (r) => (
        <div>
          <div className="font-semibold text-brand-black">{r.name}</div>
          <div className="text-xs text-gray-500">{r.location}</div>
        </div>
      )
    },
    {
      key: "clientType",
      header: "Client",
      render: (r) => (
        <span
          className={`chip ${
            r.clientType === "Government"
              ? "bg-brand-gold text-brand-black"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {r.clientType}
        </span>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (r) => (
        <span
          className={`chip ${
            r.status === "Ongoing"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {r.status}
        </span>
      )
    },
    { key: "budget", header: "Budget", render: (r) => r.budget || "—" },
    {
      key: "progress",
      header: "Progress",
      render: (r) => (
        <div className="w-28">
          <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
            <span>{r.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-gold to-brand-goldlight"
              style={{ width: `${r.progress}%` }}
            />
          </div>
        </div>
      )
    },
    {
      key: "startDate",
      header: "Start",
      render: (r) => formatDate(r.startDate)
    },
    {
      key: "endDate",
      header: "End",
      render: (r) => (r.endDate ? formatDate(r.endDate) : "—")
    },
    { key: "siteManager", header: "Manager", render: (r) => r.siteManager || "—" },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex gap-2 text-xs font-semibold">
          <button
            onClick={() => {
              setEditing(r);
              setShowForm(true);
            }}
            className="text-brand-black hover:text-brand-gold"
          >
            Edit
          </button>
          <button
            onClick={() => del(r.id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <AdminHeader
        title="Projects Management"
        description="Manage all government and private projects — ongoing and completed."
        action={
          <button
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
            className="btn-primary !px-4 !py-2 text-sm"
          >
            + Add Project
          </button>
        }
      />

      <div className="flex flex-wrap gap-2 mb-5">
        {(["All", "Ongoing", "Completed", "Government", "Private"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
              filter === f
                ? "bg-brand-black text-brand-gold border-brand-black"
                : "bg-white text-gray-600 border-gray-200 hover:border-brand-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <DataTable columns={columns} rows={filtered} />

      {showForm && (
        <ProjectForm
          initial={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSave={save}
        />
      )}
    </div>
  );
}

function ProjectForm({
  initial,
  onClose,
  onSave
}: {
  initial: Project | null;
  onClose: () => void;
  onSave: (p: Project) => void;
}) {
  const [form, setForm] = useState<Project>(
    initial ?? {
      id: `PRJ-${Math.floor(100 + Math.random() * 900)}`,
      name: "",
      clientType: "Private",
      status: "Ongoing",
      location: "",
      startDate: new Date().toISOString().slice(0, 10),
      description: "",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      progress: 0,
      budget: "",
      siteManager: ""
    }
  );

  const up = <K extends keyof Project>(k: K, v: Project[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-premium w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-display font-bold text-lg">
            {initial ? "Edit Project" : "Add Project"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            ✕
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
          }}
          className="p-5 grid sm:grid-cols-2 gap-4"
        >
          <Input label="Project ID" value={form.id} onChange={(v) => up("id", v)} />
          <Input label="Name" value={form.name} onChange={(v) => up("name", v)} required />
          <Select
            label="Client Type"
            value={form.clientType}
            onChange={(v) => up("clientType", v as Project["clientType"])}
            options={["Government", "Private"]}
          />
          <Select
            label="Status"
            value={form.status}
            onChange={(v) => up("status", v as Project["status"])}
            options={["Ongoing", "Completed"]}
          />
          <Input
            label="Location"
            value={form.location}
            onChange={(v) => up("location", v)}
            required
          />
          <Input label="Budget" value={form.budget || ""} onChange={(v) => up("budget", v)} />
          <Input
            label="Start Date"
            type="date"
            value={form.startDate}
            onChange={(v) => up("startDate", v)}
          />
          <Input
            label="End Date"
            type="date"
            value={form.endDate || ""}
            onChange={(v) => up("endDate", v)}
          />
          <Input
            label="Progress (%)"
            type="number"
            value={String(form.progress)}
            onChange={(v) => up("progress", Number(v))}
          />
          <Input
            label="Site Manager"
            value={form.siteManager || ""}
            onChange={(v) => up("siteManager", v)}
          />
          <div className="sm:col-span-2">
            <Input
              label="Image URL"
              value={form.image}
              onChange={(v) => up("image", v)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                Description
              </span>
              <textarea
                value={form.description}
                onChange={(e) => up("description", e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              />
            </label>
          </div>

          <div className="sm:col-span-2 flex justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-black"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary !px-5 !py-2 text-sm">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
