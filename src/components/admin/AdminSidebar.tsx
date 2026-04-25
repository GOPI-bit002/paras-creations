"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logout } from "@/lib/auth";
import { company } from "@/data/company";

const nav: { href: string; label: string; icon: React.ReactNode }[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    )
  },
  {
    href: "/admin/employees",
    label: "Employees",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11a3 3 0 100-6 3 3 0 000 6zm-8 0a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05A5.6 5.6 0 0118 17v3h6v-3c0-2.66-5.33-4-8-4z" />
      </svg>
    )
  },
  {
    href: "/admin/inventory",
    label: "Inventory",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4a2 2 0 00-2 2v3h20V4a2 2 0 00-2-2zM2 20a2 2 0 002 2h16a2 2 0 002-2V9H2v11zm6-7h8v2H8v-2z" />
      </svg>
    )
  },
  {
    href: "/admin/projects",
    label: "Projects",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    )
  },
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    )
  },
  {
    href: "/admin/ai-leads",
    label: "AI Leads",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a5 5 0 00-5 5v1H6a3 3 0 00-3 3v3a3 3 0 003 3h1v2a3 3 0 003 3h4a3 3 0 003-3v-2h1a3 3 0 003-3v-3a3 3 0 00-3-3h-1V7a5 5 0 00-5-5zm-2 5a2 2 0 014 0v1h-4V7zm0 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    )
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.14 12.94a7.4 7.4 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.1 7.1 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.59.24-1.14.55-1.62.94l-2.39-.96a.5.5 0 00-.6.22L2.67 8.84a.5.5 0 00.12.64l2.03 1.58a7.4 7.4 0 000 1.88L2.79 14.52a.5.5 0 00-.12.64l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.48.39 1.03.7 1.62.94l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54c.59-.24 1.14-.55 1.62-.94l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
      </svg>
    )
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/admin");
    router.refresh();
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 bg-brand-black border-b border-white/10 h-14 flex items-center justify-between px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold text-sm">
            P
          </span>
          <div className="text-white font-display font-bold text-sm">
            {company.name}
          </div>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-white p-2 rounded-md hover:bg-white/5"
          aria-label="Toggle sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-brand-black text-white z-50 lg:z-30 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col border-r border-white/10`}
      >
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="p-5 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="relative h-10 w-10 rounded-md bg-brand-gold flex items-center justify-center text-brand-black font-extrabold shadow-gold">
              P
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400 ring-2 ring-brand-black" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">{company.name}</div>
              <div className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">
                Admin Panel
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
            Main
          </div>
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                  active
                    ? "bg-brand-gold text-brand-black shadow-gold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={active ? "text-brand-black" : "text-brand-gold"}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7 7-7v4h11v6H10v4z" />
            </svg>
            Back to Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-red-300 hover:bg-red-500/10 hover:text-red-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4a2 2 0 00-2 2v14a2 2 0 002 2h8v-2H4V5z" />
            </svg>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
