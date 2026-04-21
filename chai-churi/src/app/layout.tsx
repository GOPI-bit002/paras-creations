import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chai-Churi · Premium Cafe in Una, Himachal Pradesh",
  description:
    "Chai-Churi — premium chai, traditional churi, pizzas, burgers, sandwiches, shakes & mojitos. A modern vegetarian cafe experience in Una, Himachal Pradesh.",
  keywords: [
    "Chai-Churi",
    "cafe Una",
    "chai Una",
    "churi",
    "vegetarian cafe Himachal",
    "best cafe Una",
    "pizza Una",
    "burgers Una",
  ],
  metadataBase: new URL("https://chai-churi.vercel.app"),
  openGraph: {
    title: "Chai-Churi · Premium Cafe in Una",
    description:
      "Premium chai, churi, pizzas, burgers & shakes — a modern vegetarian cafe in Una, Himachal Pradesh.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b4d2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
