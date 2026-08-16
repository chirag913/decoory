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
  title: "3 BHK Interior Design in Greater Noida",
  description:
    "3 BHK interior design in Greater Noida — flexible room allocation, larger kitchen and living options, and personalised design per room, from Decoory Interiors.",
  alternates: { canonical: "/3bhk-interior-design-greater-noida" }
};

const priorities = [
  ["Flexible third room", "The third bedroom in a 3BHK is often a genuine choice point — kids' room, home office, or guest room. We design it around your actual near-term plans, not a generic layout."],
  ["Distinct design per room", "With more rooms to work with, each bedroom can carry its own material palette and lighting mood instead of everything matching a single template."],
  ["Larger kitchen options", "3BHK kitchens often have more width to work with — parallel or L-shaped layouts with a dedicated utility or pantry zone become realistic options."],
  ["Living & dining separation", "More floor area allows living and dining to be treated as distinct zones with their own furniture language, rather than one shared open space."]
];

const faqs = [
  {
    q: "How should I decide what the third bedroom is for?",
    a: "We'll walk through your next 3–5 years — kids, work-from-home needs, guests — during the consultation, and design the room's storage and furniture so it works well for that use rather than staying generic."
  },
  {
    q: "Can each bedroom have a different design style?",
    a: "Yes, this is common in 3BHK projects. Each room can have its own material and colour direction while staying consistent with the home's overall design language."
  },
  {
    q: "Do you handle kitchen, wardrobes and false ceiling as one package?",
    a: "Yes, a full 3BHK project covers the complete turnkey scope — modular kitchen, wardrobes across all bedrooms, false ceiling, painting, electrical and furniture."
  },
  {
    q: "Is there a warranty on 3BHK interior work?",
    a: "Yes, Decoory's standard 10-year warranty covers the full project."
  },
  {
    q: "How do I get a 3BHK interior quote?",
    a: `Book a free consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY}.`
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
            serviceType: "3 BHK Interior Design",
            provider: providerSchema,
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="3 BHK Interior Design in Greater Noida" />
      <LandingHero
        eyebrow="3 BHK Interiors"
        h1="3 BHK Interior Design in Greater Noida"
        subhead="More rooms, more choices — flexible room allocation and distinct design per room, planned around how your family actually lives."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=86"
        imageAlt="3 BHK interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Design Priorities" title="Getting the most out of a 3BHK layout" />
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
          { label: "3 BHK Interior Design Ideas for Noida Extension", href: "/blog/3bhk-interior-design-ideas-for-noida-extension" },
          { label: "3 BHK Interior Design Cost in Greater Noida", href: "/blog/3bhk-interior-design-cost-in-greater-noida" },
          { label: "3 BHK Interior Design Layout Ideas for Greater Noida West", href: "/blog/3bhk-interior-design-layout-ideas-for-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="3 BHK Interior Design Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
