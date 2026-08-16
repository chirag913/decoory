import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://decoory.com"),
  title: {
    default: "Decoory Interiors | Complete Turnkey Interior Designer in Greater Noida West",
    template: "%s | Decoory Interiors"
  },
  description:
    "Complete turnkey interior design in Greater Noida West — design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture, all under one roof.",
  keywords: [
    "interior designer Greater Noida West",
    "turnkey interior designer Greater Noida West",
    "luxury interior designer Noida",
    "premium interiors Delhi NCR",
    "turnkey home interior design",
    "villa interiors",
    "modular kitchen Noida",
    "high end home interior design India"
  ],
  openGraph: {
    title: "Decoory Interiors | Complete Turnkey Interior Designer in Greater Noida West",
    description:
      "Design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture — complete interior solutions under one roof for homes in Greater Noida West.",
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
