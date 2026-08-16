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
  title: "4 BHK Interior Design in Greater Noida",
  description:
    "4 BHK interior design in Greater Noida — dedicated study or pooja room planning, family lounge zones and coordinated design across larger homes, from Decoory Interiors.",
  alternates: { canonical: "/4bhk-interior-design-greater-noida" }
};

const priorities = [
  ["Dedicated function rooms", "4BHK homes often free up room for a dedicated study, pooja room or home theatre. We plan these as intentional spaces rather than leftover rooms."],
  ["Family lounge or second living zone", "Larger homes can support a second, more casual sitting or family lounge area distinct from the main formal living room."],
  ["Coordinated design across more rooms", "With more rooms to furnish, keeping a coherent design language across the whole home (without every room looking identical) takes more deliberate planning — this is where a single design team matters most."],
  ["Multiple wardrobes & storage zones", "Larger homes need a storage strategy across several bedrooms plus common areas — planned together so nothing gets duplicated or forgotten."]
];

const faqs = [
  {
    q: "Do you plan a pooja room or study as part of a 4BHK project?",
    a: "Yes, dedicated rooms like a pooja room, study or home theatre are scoped and designed as part of the full project, with their own lighting, storage and finish considerations."
  },
  {
    q: "How do you keep the design consistent across so many rooms?",
    a: "One design team plans the material palette, lighting language and furniture direction across the whole home from the start, so individual rooms feel distinct but still belong to the same home."
  },
  {
    q: "Is a 4BHK project still handled as one turnkey contract?",
    a: "Yes — design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture across the entire home, under one contract and one supervising team."
  },
  {
    q: "Is there a warranty on 4BHK interior work?",
    a: "Yes, Decoory's standard 10-year warranty applies across the full home."
  },
  {
    q: "How do I get a 4BHK interior quote?",
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
            serviceType: "4 BHK Interior Design",
            provider: providerSchema,
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="4 BHK Interior Design in Greater Noida" />
      <LandingHero
        eyebrow="4 BHK Interiors"
        h1="4 BHK Interior Design in Greater Noida"
        subhead="Dedicated study, pooja room and family lounge planning, with one design language coordinated across the whole home."
        image="https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=2200&q=86"
        imageAlt="4 BHK interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Design Priorities" title="Planning a larger home as one coherent project" />
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
          { label: "Luxury Home Interior Design in Greater Noida", href: "/luxury-home-interior-greater-noida" },
          { label: "Interior Designer in Greater Noida", href: "/interior-designer-greater-noida" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="4 BHK Interior Design Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
