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
  title: "Luxury Home Interior Design in Greater Noida",
  description:
    "Luxury home interior design in Greater Noida — premium materials, hotel-inspired detailing and a single design language across the home, from Decoory Interiors.",
  alternates: { canonical: "/luxury-home-interior-greater-noida" }
};

const pillars = [
  ["Premium material selection", "Italian marble, veneer, brass accents and higher-grade laminates and hardware, chosen deliberately rather than as blanket upgrades on every surface."],
  ["Layered, hotel-inspired lighting", "Ambient, task and accent lighting layered together the way premium hospitality interiors are lit, rather than a single ceiling light per room."],
  ["Proportion and detailing over volume", "Luxury in a home interior comes from proportion, finish quality and consistent detailing, not simply from spending more on every item."],
  ["One design language, whole home", "A single design team carries material, colour and lighting decisions across every room so the home reads as one composed project, not a collection of separately styled rooms."]
];

const faqs = [
  {
    q: "What actually makes a project 'luxury' versus standard?",
    a: "Material grade, detailing consistency and lighting design, primarily — not just a higher budget. A luxury project applies the same attention to proportion and finish in every room, including ones that are easy to under-design like utility areas and passages."
  },
  {
    q: "Do you work on villas as well as luxury apartments?",
    a: "Yes, our luxury projects span both premium apartments and independent villas across the Greater Noida region."
  },
  {
    q: "Is the full turnkey scope available for luxury projects?",
    a: "Yes — design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture, all under one team, the same accountability structure as any Decoory project."
  },
  {
    q: "Is there a warranty on luxury interior work?",
    a: "Yes, Decoory's standard 10-year warranty applies to luxury projects as well."
  },
  {
    q: "How do I start a luxury interior project?",
    a: `Book a free consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY} to discuss your project.`
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
            serviceType: "Luxury Home Interior Design",
            provider: providerSchema,
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="Luxury Home Interior in Greater Noida" />
      <LandingHero
        eyebrow="Luxury Interiors"
        h1="Luxury Home Interior Design in Greater Noida"
        subhead="Premium materials, layered hotel-inspired lighting and one consistent design language, carried across every room of the home."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Luxury home interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Design Pillars" title="What luxury actually means in a home interior" />
          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map(([title, desc]) => (
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
          { label: "4 BHK Interior Design in Greater Noida", href: "/4bhk-interior-design-greater-noida" },
          { label: "Living Room Design Trends for Greater Noida Homes", href: "/blog/living-room-design-trends-for-greater-noida-homes" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Luxury Home Interior Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
