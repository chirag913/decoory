import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://decoory.com"),
  title: {
    default: "Decoory Interiors | Luxury Interior Design in Noida, Delhi NCR",
    template: "%s | Decoory Interiors"
  },
  description:
    "Premium home interior design for luxury apartments, villas, modular kitchens, bedrooms, wardrobes and turnkey residential interiors across Noida and Delhi NCR.",
  keywords: [
    "luxury interior designer Noida",
    "premium interiors Delhi NCR",
    "turnkey home interior design",
    "villa interiors",
    "modular kitchen Noida",
    "high end home interior design India"
  ],
  openGraph: {
    title: "Decoory Interiors | Designing Spaces That Define Luxury",
    description:
      "Luxury home interiors, turnkey execution, modular kitchens and premium renovations for apartments, villas and modern Indian homes.",
    url: "https://decoory.com",
    siteName: "Decoory Interiors",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=82",
        width: 1600,
        height: 900,
        alt: "Luxury living room interior by Decoory Interiors"
      }
    ]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
