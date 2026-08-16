import type { Metadata } from "next";
import LandingLayout from "../_components/LandingLayout";
import LandingHero from "../_components/LandingHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionIntro from "../_components/SectionIntro";
import WhyDecoorySection from "../_components/WhyDecoorySection";
import FaqSection from "../_components/FaqSection";
import ConsultationForm from "../_components/ConsultationForm";
import RelatedLinks from "../_components/RelatedLinks";
import { PHONE_DISPLAY, providerSchema } from "../site-config";

export const metadata: Metadata = {
  title: "Modular Kitchen in Greater Noida West",
  description:
    "Modular kitchen design and installation in Greater Noida West — layout planning, shutter finishes, hardware and storage, executed in-house by Decoory Interiors as part of a turnkey scope.",
  alternates: { canonical: "/modular-kitchen-greater-noida-west" }
};

const layouts = [
  ["Parallel & L-shaped", "The two most common layouts for Greater Noida West kitchens, chosen based on your kitchen's width and where the plumbing and gas points already sit."],
  ["Island & U-shaped", "For larger kitchens and open layouts, giving extra counter and storage space without crowding the walkway."],
  ["Shutter finishes", "Laminate, acrylic and PU finishes at different price and maintenance points — we walk you through the trade-offs rather than pushing one option."],
  ["Hardware & storage", "Soft-close hinges, drawer systems, pull-out baskets and corner units selected for daily usability, not just showroom appeal."]
];

const faqs = [
  {
    q: "Do you only design the kitchen, or also handle plumbing and electrical changes?",
    a: "Full scope — layout design, civil changes if needed, electrical points for chimney/hob/appliances, plumbing for the sink, and the final modular installation, all under one team."
  },
  {
    q: "Can you work with my existing kitchen platform and plumbing points?",
    a: "Yes, in most Greater Noida West flats the platform and plumbing points are fixed by the builder. We design the layout around those points unless you specifically want civil changes."
  },
  {
    q: "What shutter and hardware options do you offer?",
    a: "Laminate, acrylic and PU shutter finishes, with hardware ranging from standard to premium soft-close systems. We recommend options based on your budget and daily usage rather than a single fixed package."
  },
  {
    q: "Is the modular kitchen covered under warranty?",
    a: "Yes, modular kitchens are covered under Decoory's standard 10-year warranty as part of any turnkey project."
  },
  {
    q: "How do I get a kitchen consultation?",
    a: `Book a free consultation through this page, WhatsApp, or call ${PHONE_DISPLAY}. We'll visit your kitchen, take measurements and discuss layout options before quoting.`
  }
];

export default function Page() {
  return (
    <LandingLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Modular Kitchen Design and Installation",
            provider: providerSchema,
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Modular Kitchen in Greater Noida West" />
      <LandingHero
        eyebrow="Modular Kitchen"
        h1="Modular Kitchen in Greater Noida West"
        subhead="Layout, shutters, hardware and storage planned for real Greater Noida West kitchen sizes — designed and installed by the same in-house team."
        image="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Modular kitchen design in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Kitchen Planning" title="Layouts and finishes chosen for how you actually cook" />
          <div className="grid gap-4 md:grid-cols-2">
            {layouts.map(([title, desc]) => (
              <div key={title} className="border border-white/12 bg-white/[0.035] p-6">
                <h3 className="font-display text-2xl font-semibold text-[#fff6e8]">{title}</h3>
                <p className="mt-3 leading-7 text-[#bdb3a7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyDecoorySection />
      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Best Modular Kitchen Designs for Greater Noida Homes", href: "/blog/best-modular-kitchen-designs-for-greater-noida-homes" },
          { label: "Modular Kitchen Cost in Noida Extension (2026 Guide)", href: "/blog/modular-kitchen-cost-in-noida-extension-2026" },
          { label: "Modular Kitchen vs Carpenter-Made Kitchen", href: "/blog/modular-kitchen-vs-carpenter-made-kitchen" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Modular Kitchen Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
