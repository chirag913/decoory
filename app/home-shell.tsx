"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("./home-client"), {
  ssr: false,
  loading: () => (
    <main className="grid min-h-screen place-items-center bg-[#080706] text-[#f7f0e5]">
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.38em] text-[#c8a96a]">
          Decoory Interiors
        </p>
        <h1 className="font-display text-5xl font-semibold">
          Designing Spaces That Define Luxury
        </h1>
      </div>
    </main>
  )
});

export default function HomeShell() {
  return <HomeClient />;
}
