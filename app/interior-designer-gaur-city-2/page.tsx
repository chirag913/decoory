import type { Metadata } from "next";
import LandingLayout from "../_components/LandingLayout";
import LandingHero from "../_components/LandingHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionIntro from "../_components/SectionIntro";
import WhyDecoorySection from "../_components/WhyDecoorySection";
import FaqSection from "../_components/FaqSection";
import ConsultationForm from "../_components/ConsultationForm";
import RelatedLinks from "../_components/RelatedLinks";
import { ADDRESS_LINE, PHONE_DISPLAY, providerSchema } from "../site-config";

export const metadata: Metadata = {
  title: "Interior Designer in Gaur City 2",
  description:
    "Turnkey interior design for Gaur City 2 homes, minutes from Decoory's Gaur City 1 studio. Design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture under one roof.",
  alternates: { canonical: "/interior-designer-gaur-city-2" }
};

const highlights = [
  ["Minutes from our Gaur City 1 studio", `Our base at ${ADDRESS_LINE} is a short drive from Gaur City 2 — close enough for frequent site visits without the delays of a distant office.`],
  ["Same team across both townships", "Gaur City 1 and Gaur City 2 share similar tower typologies. Experience from one directly carries over to design and execution decisions in the other."],
  ["Sized for Gaur City 2 carpet areas", "Storage and layout planning built around the 2BHK and 3BHK unit sizes common in Gaur City 2, not generic templates."],
  ["Full turnkey scope", "Design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture handled directly by Decoory under one contract."]
];

const faqs = [
  {
    q: "Is Gaur City 2 the same coverage area as Gaur City?",
    a: "Gaur City 2 is a separate but neighbouring township to Gaur City 1, where our studio is based. We actively take on projects in both."
  },
  {
    q: "How far is your studio from Gaur City 2?",
    a: `Our studio at ${ADDRESS_LINE} is a short drive away, close enough for regular site visits and material approvals without long travel delays.`
  },
  {
    q: "What's included in the interior scope for Gaur City 2?",
    a: "Full turnkey scope — design, woodwork, civil work, electrical, plumbing, false ceiling, painting and furniture — under one contract and one supervising team."
  },
  {
    q: "Is there a warranty on Gaur City 2 projects?",
    a: "Yes, Decoory's standard 10-year warranty applies to every turnkey project regardless of location."
  },
  {
    q: "How do I book a consultation?",
    a: `Use the form on this page, message us on WhatsApp, or call ${PHONE_DISPLAY} to schedule a site visit.`
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
            areaServed: "Gaur City 2, Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Interior Designer in Gaur City 2" />
      <LandingHero
        eyebrow="Interior Designer in Gaur City 2"
        h1="Interior Designer in Gaur City 2"
        subhead="Turnkey design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture for Gaur City 2 homes, minutes from our Gaur City 1 studio."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Home interior design in Gaur City 2"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Serving Gaur City 2" title="Neighbouring township, same local team" />
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
          { label: "Interior Designer in Gaur City", href: "/interior-designer-gaur-city" },
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Interior Designer Gaur City 2 landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
