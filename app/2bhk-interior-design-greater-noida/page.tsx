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
  title: "2 BHK Interior Design in Greater Noida",
  description:
    "2 BHK interior design in Greater Noida — space-efficient layouts, multi-use rooms and storage-first planning for compact carpet areas, from Decoory Interiors.",
  alternates: { canonical: "/2bhk-interior-design-greater-noida" }
};

const priorities = [
  ["Storage-first planning", "In a 2BHK, storage is usually the tightest constraint. Wardrobes, kitchen units and TV units are designed to maximise capacity without visually crowding the room."],
  ["Multi-use rooms", "The second bedroom often needs to double as a guest room, study or storage room. We design furniture and layout that can flex between uses rather than committing to one."],
  ["Open vs closed kitchen", "Many 2BHK layouts benefit from an open or semi-open kitchen to make the living area feel larger — we assess whether that's structurally possible in your specific flat."],
  ["Compact bathroom planning", "Fittings, storage and layout chosen to work within standard 2BHK bathroom footprints without feeling cramped."]
];

const faqs = [
  {
    q: "What's different about designing a 2BHK compared to a larger home?",
    a: "Space efficiency and multi-use planning matter more — every storage decision and furniture choice is evaluated against how tight the carpet area is, rather than defaulting to larger-home layouts scaled down."
  },
  {
    q: "Can the second bedroom work as both a guest room and a study?",
    a: "Yes, this is one of the most common 2BHK requests. We design furniture (fold-out or convertible pieces, flexible storage) so the room can genuinely serve both purposes."
  },
  {
    q: "Do you handle the kitchen and wardrobes as part of the 2BHK package?",
    a: "Yes, a full 2BHK interior project covers modular kitchen, wardrobes, false ceiling, painting, electrical and furniture — the complete turnkey scope."
  },
  {
    q: "Is there a warranty on 2BHK interior work?",
    a: "Yes, Decoory's standard 10-year warranty applies regardless of home size."
  },
  {
    q: "How do I get a 2BHK interior quote?",
    a: `Book a free consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY}. We'll visit your flat and discuss layout options before quoting.`
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
            serviceType: "2 BHK Interior Design",
            provider: providerSchema,
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="2 BHK Interior Design in Greater Noida" />
      <LandingHero
        eyebrow="2 BHK Interiors"
        h1="2 BHK Interior Design in Greater Noida"
        subhead="Space-efficient layouts, multi-use rooms and storage-first planning built for real 2BHK carpet areas."
        image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2200&q=86"
        imageAlt="2 BHK interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Design Priorities" title="What matters most in a 2BHK layout" />
          <div className="grid gap-4 md:grid-cols-2">
            {priorities.map(([title, desc]) => (
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
          { label: "2 BHK Interior Design Ideas for Greater Noida West", href: "/blog/2bhk-interior-design-ideas-for-greater-noida-west" },
          { label: "2 BHK Interior Design Cost in Greater Noida", href: "/blog/2bhk-interior-design-cost-in-greater-noida" },
          { label: "What a Complete 2 BHK Interior Involves", href: "/blog/what-a-complete-2bhk-interior-involves" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="2 BHK Interior Design Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
