import AdminAuthGate from "@/components/admin/AdminAuthGate";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = { title: "Admin — Paras Creations" };

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthGate>
      <div className="min-h-screen bg-brand-soft flex">
        <AdminSidebar />
        <div className="flex-1 min-w-0">
          <main className="p-5 sm:p-8 pt-20 lg:pt-8 max-w-[1400px] mx-auto">
            {children}
          </main>
        </div>
      </div>
    </AdminAuthGate>
  );
}
