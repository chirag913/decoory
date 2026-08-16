import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      { source: '/contact',  destination: '/#contact',      permanent: true },
      { source: '/services', destination: '/#services',     permanent: true },
      { source: '/projects', destination: '/#projects',     permanent: true },
      { source: '/about',    destination: '/#trust',        permanent: true },
      { source: '/gallery',  destination: '/#projects',     permanent: true },
    ];
  }
};

export default nextConfig;