"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import { enquiries as seed } from "@/data/enquiries";
import { formatDate } from "@/lib/utils";
import type { Enquiry, EnquiryStatus } from "@/types";

export default function EnquiriesAdminPage() {
  const [rows, setRows] = useState<Enquiry[]>(seed);
  const [filter, setFilter] = useState<"All" | EnquiryStatus>("All");

  const setStatus = (id: string, s: EnquiryStatus) => {
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status: s } : x)));
  };

  const del = (id: string) => {
    if (confirm("Delete this enquiry?")) {
      setRows((r) => r.filter((x) => x.id !== id));
    }
  };

  const filtered = rows.filter((r) => (filter === "All" ? true : r.status === filter));

  const columns: Column<Enquiry>[] = [
    {
      key: "name",
      header: "Client",
      render: (r) => (
        <div>
          <div className="font-semibold text-brand-black">{r.name}</div>
          <div className="text-xs text-gray-500">
            <a href={`tel:${r.mobile}`} className="hover:text-brand-gold">
              {r.mobile}
            </a>
          </div>
        </div>
      )
    },
    { key: "projectType", header: "Project Type" },
    { key: "location", header: "Location" },
    {
      key: "message",
      header: "Message",
      render: (r) => (
        <div className="max-w-sm text-xs text-gray-600 whitespace-normal line-clamp-2">
          {r.message}
        </div>
      )
    },
    {
      key: "createdAt",
      header: "Received",
      render: (r) => formatDate(r.createdAt)
    },
    {
      key: "status",
      header: "Status",
      render: (r) => (
        <select
          value={r.status}
          onChange={(e) => setStatus(r.id, e.target.value as EnquiryStatus)}
          className={`text-xs font-semibold rounded-full px-3 py-1 border focus:outline-none ${
            r.status === "New"
              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
              : r.status === "Contacted"
              ? "bg-blue-100 text-blue-800 border-blue-200"
              : "bg-gray-100 text-gray-600 border-gray-200"
          }`}
        >
          <option>New</option>
          <option>Contacted</option>
          <option>Closed</option>
        </select>
      )
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex gap-2 text-xs font-semibold">
          <a
            href={`tel:${r.mobile}`}
            className="text-brand-black hover:text-brand-gold"
          >
            Call
          </a>
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
        title="Enquiries"
        description="Client enquiry submissions from the public contact form."
      />

      <div className="flex flex-wrap gap-2 mb-5">
        {(["All", "New", "Contacted", "Closed"] as const).map((f) => (
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
    </div>
  );
}
