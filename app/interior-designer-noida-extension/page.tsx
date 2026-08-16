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
  title: "Interior Designer in Noida Extension",
  description:
    "Home interior design in Noida Extension (Greater Noida West) — turnkey design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture from a locally based studio in Gaur City 1.",
  alternates: { canonical: "/interior-designer-noida-extension" }
};

const highlights = [
  ["Same team, familiar name", "“Noida Extension” is the name most residents still use for Greater Noida West — our studio, team and coverage area are exactly the same either way."],
  ["Built for newer possession towers", "Many Noida Extension towers are recent handovers with builder-standard fittings. We plan around what's already there rather than treating every wall as a blank slate."],
  ["Realistic for compact carpet areas", "Layouts are designed for the 2BHK and 3BHK carpet area ranges typical of Noida Extension, prioritising storage and space efficiency over showroom-scale furniture."],
  ["One team, full scope", "Design, civil, electrical, plumbing, false ceiling, painting, woodwork and furniture handled by Decoory directly, not split across separate vendors you have to coordinate."]
];

const faqs = [
  {
    q: "Is Noida Extension the same as Greater Noida West?",
    a: "Yes. Noida Extension is the popular, older name for the area now officially called Greater Noida West. Decoory's coverage, studio location and team are identical under either name."
  },
  {
    q: "Do you work with builder-handover flats, or only fully bare shell units?",
    a: "Both. A large share of Noida Extension projects come to us as builder-standard handover flats, and we plan the interior scope — including any civil or electrical changes — around what's already in place."
  },
  {
    q: "What's included in a full home interior here?",
    a: "Design, woodwork, civil work, electrical, plumbing, false ceiling, painting and furniture — the complete turnkey scope under one contract, supervised end-to-end by Decoory."
  },
  {
    q: "Is there a warranty on Noida Extension projects?",
    a: "Yes, every turnkey project carries Decoory's standard 10-year warranty."
  },
  {
    q: "How do I get a consultation?",
    a: `Fill the form on this page, message us on WhatsApp, or call ${PHONE_DISPLAY}. We'll arrange a site visit and walk through scope and design direction before anything is finalised.`
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
            ...providerSchema,
            areaServed: "Noida Extension (Greater Noida West)"
          })
        }}
      />
      <Breadcrumbs label="Interior Designer in Noida Extension" />
      <LandingHero
        eyebrow="Interior Designer in Noida Extension"
        h1="Interior Designer in Noida Extension"
        subhead="Design, Woodwork, Civil, Electrical, Plumbing, False Ceiling, Painting & Furniture — complete turnkey home interiors for Noida Extension, from a studio based in the same area."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Home interior design in Noida Extension"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Noida Extension Homes"
            title="Interiors planned around how Noida Extension towers are actually built"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map(([title, desc]) => (
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
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" },
          { label: "Complete Home Interior Cost in Noida Extension", href: "/blog/complete-home-interior-cost-in-noida-extension" },
          { label: "What a Complete Home Interior Includes in Noida Extension", href: "/blog/what-a-complete-home-interior-includes-in-noida-extension" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Interior Designer Noida Extension landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
