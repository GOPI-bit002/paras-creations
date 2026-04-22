import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteltara.vercel.app"),
  title: {
    default: "Hotel TARA | Premium Stay in Una, Himachal Pradesh",
    template: "%s | Hotel TARA",
  },
  description:
    "Hotel TARA located at Vill. & P.O. Behdala, Nangal Road, NH 503, Una, Himachal Pradesh. Call 098167 64281 for room booking and enquiries.",
  keywords: [
    "Hotel TARA",
    "Hotel in Una",
    "Himachal Pradesh hotel",
    "Behdala hotel",
    "Nangal Road stay",
    "NH 503 hotel",
    "Una Himachal booking",
    "Family hotel Una",
  ],
  authors: [{ name: "Hotel TARA" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hoteltara.vercel.app",
    siteName: "Hotel TARA",
    title: "Hotel TARA | Premium Stay in Una, Himachal Pradesh",
    description:
      "Comfortable, convenient and premium stay on NH 503 near Una. Book your room today — call 098167 64281.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Hotel TARA — premium stay in Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel TARA | Premium Stay in Una, Himachal Pradesh",
    description:
      "Comfortable, convenient and premium stay on NH 503 near Una. Call 098167 64281.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F3D2B",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel TARA",
  description:
    "Hotel TARA — comfortable stay on NH 503, Nangal Road near Una, Himachal Pradesh.",
  telephone: "+91-9816764281",
  url: "https://hoteltara.vercel.app",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vill. & P.O. Behdala, Nangal Road, NH 503",
    addressLocality: "Una",
    addressRegion: "Himachal Pradesh",
    postalCode: "174306",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "Family Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
