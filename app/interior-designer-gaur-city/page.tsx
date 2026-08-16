import type { Metadata } from "next";
import LandingLayout from "../_components/LandingLayout";
import LandingHero from "../_components/LandingHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionIntro from "../_components/SectionIntro";
import WhyDecoorySection from "../_components/WhyDecoorySection";
import FaqSection from "../_components/FaqSection";
import ConsultationForm from "../_components/ConsultationForm";
import RelatedLinks from "../_components/RelatedLinks";
import { ADDRESS_LINE, MAPS_URL, PHONE_DISPLAY, providerSchema } from "../site-config";

export const metadata: Metadata = {
  title: "Interior Designer in Gaur City",
  description:
    "Decoory Interiors' studio is inside Gaur City 1, Sector 4. Walk-in consultations, turnkey design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture for Gaur City homes.",
  alternates: { canonical: "/interior-designer-gaur-city" }
};

const highlights = [
  ["Our studio is inside Gaur City 1", `Address: ${ADDRESS_LINE}. Walk in for a consultation, or book a time slot in advance.`],
  ["Deep familiarity with Gaur City towers", "Years of projects across Gaur City means we already know common tower layouts, standard fittings and typical civil conditions before we even step on site."],
  ["Fast turnaround on site visits", "Being based in Gaur City itself means site visits, measurement checks and material approvals happen faster, without cross-city travel delays."],
  ["Full turnkey scope", "Design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture — handled directly by Decoory, not outsourced piecemeal."]
];

const faqs = [
  {
    q: "Can I visit your studio in person?",
    a: `Yes — our studio is at ${ADDRESS_LINE}. Walk-ins are welcome, though booking a slot in advance ensures a designer is free to meet you.`
  },
  {
    q: "Do you know Gaur City floor plans already?",
    a: "In most cases, yes. We've worked on a large number of Gaur City units across different towers and can usually speak to your layout specifics from the first conversation."
  },
  {
    q: "What's included in a Gaur City interior project?",
    a: "Full turnkey scope — design, woodwork, civil work, electrical, plumbing, false ceiling, painting and furniture — under one contract with one supervising team."
  },
  {
    q: "Is there a warranty?",
    a: "Yes, every project carries Decoory's standard 10-year warranty."
  },
  {
    q: "How do I book a consultation?",
    a: `Use the form below, message us on WhatsApp, call ${PHONE_DISPLAY}, or simply walk into the studio in Gaur City 1.`
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
            areaServed: "Gaur City, Greater Noida West",
            hasMap: MAPS_URL
          })
        }}
      />
      <Breadcrumbs label="Interior Designer in Gaur City" />
      <LandingHero
        eyebrow="Interior Designer in Gaur City"
        h1="Interior Designer in Gaur City"
        subhead="Our studio is inside Gaur City 1, Sector 4 — turnkey design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture for Gaur City homes."
        image="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Interior design studio in Gaur City"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Based in Gaur City" title="Design and execution from a studio in your own society cluster" />
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
          { label: "Interior Designer in Gaur City 2", href: "/interior-designer-gaur-city-2" },
          { label: "Best Interior Design Ideas for Gaur City Flats", href: "/blog/best-interior-design-ideas-for-gaur-city-flats" },
          { label: "Modular Kitchen Design Ideas for Gaur City Homes", href: "/blog/modular-kitchen-design-ideas-for-gaur-city-homes" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Interior Designer Gaur City landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
