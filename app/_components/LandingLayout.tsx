import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import MobileCta from "./MobileCta";
import ChatbaseWidget from "./ChatbaseWidget";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileCta />
      <ChatbaseWidget />
    </main>
  );
}
