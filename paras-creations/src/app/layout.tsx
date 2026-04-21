import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/data/company";
import ConstructionChatWidget from "@/components/public/ConstructionChatWidget";

export const metadata: Metadata = {
  title: `${company.name} — ${company.tagline}`,
  description: `${company.name} is led by ${company.owner}. We deliver premium government and private construction projects across India.`,
  keywords: [
    "construction company",
    "government contractor",
    "private building construction",
    "civil work",
    "Paras Creations",
    "Manoj Sharma"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
        <ConstructionChatWidget />
      </body>
    </html>
  );
}
