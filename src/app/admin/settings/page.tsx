"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { company } from "@/data/company";

export default function SettingsAdminPage() {
  const [form, setForm] = useState({
    name: company.name,
    owner: company.owner,
    phone: company.phone,
    email: company.email
  });
  const [saved, setSaved] = useState(false);

  const up = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: Settings are read-only in version 1. To persist changes,
    //       edit src/data/company.ts directly, or add a DB + API.
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <AdminHeader
        title="Settings"
        description="Basic company information shown on the public website."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        <form
          onSubmit={handleSave}
          className="card p-6 lg:col-span-2 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              label="Company Name"
              value={form.name}
              onChange={(v) => up("name", v)}
            />
            <Input
              label="Owner Name"
              value={form.owner}
              onChange={(v) => up("owner", v)}
            />
            <Input
              label="Contact Number"
              value={form.phone}
              onChange={(v) => up("phone", v)}
            />
            <Input
              label="Email"
              value={form.email}
              onChange={(v) => up("email", v)}
            />
          </div>

          <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Changes here are visual only in v1. Edit{" "}
              <code className="px-1.5 py-0.5 bg-gray-100 rounded text-brand-black">
                src/data/company.ts
              </code>{" "}
              to make them permanent.
            </div>
            <button type="submit" className="btn-primary !px-5 !py-2 text-sm">
              Save Changes
            </button>
          </div>

          {saved && (
            <div className="bg-green-50 text-green-700 text-sm rounded-md border border-green-200 px-3 py-2">
              ✓ Settings saved (in-memory only).
            </div>
          )}
        </form>

        <div className="space-y-4">
          <div className="card p-6">
            <h4 className="font-display font-bold text-brand-black">Theme</h4>
            <p className="mt-2 text-sm text-gray-600">
              Built with a premium black + gold palette. To tune colors, edit{" "}
              <code className="px-1.5 py-0.5 bg-gray-100 rounded text-brand-black">
                tailwind.config.ts
              </code>
              .
            </p>
            <div className="mt-4 flex gap-2">
              {["bg-brand-black", "bg-brand-gold", "bg-brand-goldlight", "bg-brand-soft", "bg-brand-gray"].map(
                (c) => (
                  <div
                    key={c}
                    className={`h-8 w-8 rounded-full border border-gray-200 ${c}`}
                  />
                )
              )}
            </div>
          </div>

          <div className="card p-6 border-dashed">
            <h4 className="font-display font-bold text-brand-black">
              Future: Database
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Demo data lives under{" "}
              <code className="px-1.5 py-0.5 bg-gray-100 rounded text-brand-black">
                src/data/*.ts
              </code>
              . To connect a real database (Prisma, Supabase, etc.), replace
              those imports with API/DB calls and add server actions.
            </p>
          </div>

          <div className="card p-6 bg-yellow-50 border-yellow-200">
            <h4 className="font-display font-bold text-yellow-900">
              Security Notice
            </h4>
            <p className="mt-2 text-sm text-yellow-900/80">
              This admin panel uses <strong>demo authentication</strong>. Before
              going live, replace the auth logic in{" "}
              <code className="px-1 py-0.5 bg-yellow-100 rounded">
                src/lib/auth.ts
              </code>{" "}
              with a real auth provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
      />
    </label>
  );
}
