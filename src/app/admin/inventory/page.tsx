"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import { inventory as seed } from "@/data/inventory";
import { formatDate } from "@/lib/utils";
import type { InventoryItem } from "@/types";

export default function InventoryAdminPage() {
  const [rows, setRows] = useState<InventoryItem[]>(seed);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<InventoryItem | null>(null);

  const save = (item: InventoryItem) => {
    setRows((r) => {
      const exists = r.find((x) => x.id === item.id);
      if (exists) return r.map((x) => (x.id === item.id ? item : x));
      return [item, ...r];
    });
    setShowForm(false);
    setEditing(null);
  };

  const sendToSite = (id: string) => {
    const site = prompt("Enter site name to send to:");
    if (!site) return;
    setRows((r) =>
      r.map((x) =>
        x.id === id
          ? {
              ...x,
              currentSite: site,
              lastUpdated: new Date().toISOString().slice(0, 10)
            }
          : x
      )
    );
  };

  const markReturned = (id: string) => {
    const qty = Number(prompt("Quantity returned:") || 0);
    if (qty <= 0) return;
    setRows((r) =>
      r.map((x) =>
        x.id === id
          ? {
              ...x,
              returned: x.returned + qty,
              available: x.available + qty,
              used: Math.max(0, x.used - qty),
              lastUpdated: new Date().toISOString().slice(0, 10)
            }
          : x
      )
    );
  };

  const updateQty = (id: string) => {
    const qty = Number(prompt("New total quantity:") || 0);
    if (qty <= 0) return;
    setRows((r) =>
      r.map((x) =>
        x.id === id
          ? {
              ...x,
              total: qty,
              lastUpdated: new Date().toISOString().slice(0, 10)
            }
          : x
      )
    );
  };

  const columns: Column<InventoryItem>[] = [
    { key: "id", header: "Item ID" },
    {
      key: "name",
      header: "Item",
      render: (r) => (
        <div>
          <div className="font-semibold text-brand-black">{r.name}</div>
          <div className="text-xs text-gray-500">{r.currentSite}</div>
        </div>
      )
    },
    {
      key: "category",
      header: "Category",
      render: (r) => (
        <span
          className={`chip ${
            r.category === "Material"
              ? "bg-blue-100 text-blue-800"
              : r.category === "Tool"
              ? "bg-amber-100 text-amber-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {r.category}
        </span>
      )
    },
    {
      key: "total",
      header: "Total",
      render: (r) => `${r.total} ${r.unit}`
    },
    {
      key: "available",
      header: "Available",
      render: (r) => (
        <span className="font-semibold text-green-700">
          {r.available} {r.unit}
        </span>
      )
    },
    {
      key: "used",
      header: "Used",
      render: (r) => `${r.used} ${r.unit}`
    },
    {
      key: "returned",
      header: "Returned",
      render: (r) => `${r.returned} ${r.unit}`
    },
    {
      key: "lastUpdated",
      header: "Updated",
      render: (r) => formatDate(r.lastUpdated)
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <button
            onClick={() => updateQty(r.id)}
            className="text-brand-black hover:text-brand-gold"
          >
            Update
          </button>
          <button
            onClick={() => sendToSite(r.id)}
            className="text-blue-700 hover:text-blue-900"
          >
            Send
          </button>
          <button
            onClick={() => markReturned(r.id)}
            className="text-green-700 hover:text-green-900"
          >
            Return
          </button>
          <button
            onClick={() => {
              setEditing(r);
              setShowForm(true);
            }}
            className="text-gray-600 hover:text-black"
          >
            Edit
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <AdminHeader
        title="Inventory"
        description="Track materials, tools, and equipment across all sites."
        action={
          <button
            className="btn-primary !px-4 !py-2 text-sm"
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
          >
            + Add Item
          </button>
        }
      />

      <DataTable columns={columns} rows={rows} />

      {showForm && (
        <InventoryFormModal
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

function InventoryFormModal({
  initial,
  onClose,
  onSave
}: {
  initial: InventoryItem | null;
  onClose: () => void;
  onSave: (i: InventoryItem) => void;
}) {
  const [form, setForm] = useState<InventoryItem>(
    initial ?? {
      id: `INV-${Math.floor(100 + Math.random() * 900)}`,
      name: "",
      category: "Material",
      total: 0,
      available: 0,
      used: 0,
      returned: 0,
      currentSite: "",
      lastUpdated: new Date().toISOString().slice(0, 10),
      unit: "pcs"
    }
  );

  const up = <K extends keyof InventoryItem>(k: K, v: InventoryItem[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-premium w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-display font-bold text-lg">
            {initial ? "Edit Item" : "Add Item"}
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
          <SimpleInput label="Item ID" value={form.id} onChange={(v) => up("id", v)} />
          <SimpleInput label="Name" value={form.name} onChange={(v) => up("name", v)} required />
          <label className="block">
            <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
              Category
            </span>
            <select
              value={form.category}
              onChange={(e) => up("category", e.target.value as InventoryItem["category"])}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              <option>Material</option>
              <option>Tool</option>
              <option>Equipment</option>
            </select>
          </label>
          <SimpleInput label="Unit" value={form.unit} onChange={(v) => up("unit", v)} />
          <SimpleInput
            label="Total"
            type="number"
            value={String(form.total)}
            onChange={(v) => up("total", Number(v))}
          />
          <SimpleInput
            label="Available"
            type="number"
            value={String(form.available)}
            onChange={(v) => up("available", Number(v))}
          />
          <SimpleInput
            label="Used"
            type="number"
            value={String(form.used)}
            onChange={(v) => up("used", Number(v))}
          />
          <SimpleInput
            label="Returned"
            type="number"
            value={String(form.returned)}
            onChange={(v) => up("returned", Number(v))}
          />
          <SimpleInput
            label="Current Site"
            value={form.currentSite}
            onChange={(v) => up("currentSite", v)}
          />
          <SimpleInput
            label="Last Updated"
            type="date"
            value={form.lastUpdated}
            onChange={(v) => up("lastUpdated", v)}
          />

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

function SimpleInput({
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
