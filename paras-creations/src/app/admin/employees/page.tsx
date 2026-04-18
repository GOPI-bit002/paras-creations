"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import DataTable, { Column } from "@/components/admin/DataTable";
import { employees as seed } from "@/data/employees";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Employee } from "@/types";

// ------------------------------------------------------------
// PRIVATE DATA — Visible only inside the admin dashboard.
// Never surface this information on public pages.
// ------------------------------------------------------------

export default function EmployeesAdminPage() {
  const [rows, setRows] = useState<Employee[]>(seed);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Employee | null>(null);

  const handleDelete = (id: string) => {
    if (confirm("Delete this employee record?")) {
      setRows((r) => r.filter((x) => x.id !== id));
    }
  };

  const handleSave = (emp: Employee) => {
    setRows((r) => {
      const exists = r.find((x) => x.id === emp.id);
      if (exists) return r.map((x) => (x.id === emp.id ? emp : x));
      return [emp, ...r];
    });
    setShowForm(false);
    setEditing(null);
  };

  const columns: Column<Employee>[] = [
    { key: "id", header: "Emp ID" },
    {
      key: "name",
      header: "Name",
      render: (r) => (
        <div>
          <div className="font-semibold text-brand-black">{r.name}</div>
          <div className="text-xs text-gray-500">{r.mobile}</div>
        </div>
      )
    },
    { key: "role", header: "Role" },
    { key: "department", header: "Department" },
    { key: "currentSite", header: "Current Site" },
    {
      key: "salary",
      header: "Salary",
      render: (r) => (
        <span className="font-semibold text-brand-black">
          {formatCurrency(r.salary)}
        </span>
      )
    },
    { key: "joiningDate", header: "Joined", render: (r) => formatDate(r.joiningDate) },
    {
      key: "attendance",
      header: "Attendance",
      render: (r) => (
        <span
          className={`chip ${
            r.attendance === "Present"
              ? "bg-green-100 text-green-800"
              : r.attendance === "Absent"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {r.attendance}
        </span>
      )
    },
    {
      key: "status",
      header: "Status",
      render: (r) => (
        <span
          className={`chip ${
            r.status === "Active"
              ? "bg-brand-black text-brand-gold"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {r.status}
        </span>
      )
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditing(r);
              setShowForm(true);
            }}
            className="text-xs font-semibold text-brand-black hover:text-brand-gold"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(r.id)}
            className="text-xs font-semibold text-red-600 hover:text-red-800"
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
        title="Employees"
        description="Private employee records. Visible to admin users only."
        action={
          <button
            className="btn-primary !px-4 !py-2 text-sm"
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
          >
            + Add Employee
          </button>
        }
      />

      <DataTable columns={columns} rows={rows} />

      {showForm && (
        <EmployeeFormModal
          initial={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

function EmployeeFormModal({
  initial,
  onClose,
  onSave
}: {
  initial: Employee | null;
  onClose: () => void;
  onSave: (e: Employee) => void;
}) {
  const [form, setForm] = useState<Employee>(
    initial ?? {
      id: `EMP-${Math.floor(1000 + Math.random() * 9000)}`,
      name: "",
      role: "",
      department: "",
      mobile: "",
      currentSite: "",
      salary: 0,
      joiningDate: new Date().toISOString().slice(0, 10),
      attendance: "Present",
      status: "Active"
    }
  );

  const up = <K extends keyof Employee>(k: K, v: Employee[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-premium w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-display font-bold text-lg">
            {initial ? "Edit Employee" : "Add Employee"}
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
          <Input label="Employee ID" value={form.id} onChange={(v) => up("id", v)} />
          <Input label="Name" value={form.name} onChange={(v) => up("name", v)} required />
          <Input label="Role" value={form.role} onChange={(v) => up("role", v)} required />
          <Input
            label="Department"
            value={form.department}
            onChange={(v) => up("department", v)}
            required
          />
          <Input
            label="Mobile"
            value={form.mobile}
            onChange={(v) => up("mobile", v)}
            required
          />
          <Input
            label="Current Site"
            value={form.currentSite}
            onChange={(v) => up("currentSite", v)}
          />
          <Input
            label="Salary"
            type="number"
            value={String(form.salary)}
            onChange={(v) => up("salary", Number(v))}
          />
          <Input
            label="Joining Date"
            type="date"
            value={form.joiningDate}
            onChange={(v) => up("joiningDate", v)}
          />
          <Select
            label="Attendance"
            value={form.attendance}
            onChange={(v) => up("attendance", v as Employee["attendance"])}
            options={["Present", "Absent", "On Leave"]}
          />
          <Select
            label="Status"
            value={form.status}
            onChange={(v) => up("status", v as Employee["status"])}
            options={["Active", "Inactive"]}
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
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
