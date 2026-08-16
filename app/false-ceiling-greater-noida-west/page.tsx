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
  title: "False Ceiling Design in Greater Noida West",
  description:
    "False ceiling design and installation in Greater Noida West — gypsum and POP ceilings, cove and layered lighting, designed to hide wiring and AC ducting cleanly. Part of Decoory Interiors' turnkey scope.",
  alternates: { canonical: "/false-ceiling-greater-noida-west" }
};

const styles = [
  ["Gypsum vs POP", "Gypsum board ceilings install faster and cleaner; POP allows more intricate cornice detailing. We recommend based on your design and timeline, not a single default."],
  ["Cove & layered lighting", "Concealed cove lighting and layered ceiling levels used to make rooms feel taller and more finished, especially in standard-height Greater Noida West flats."],
  ["Hiding wiring & AC ducting", "False ceilings are planned alongside electrical and AC layout so wiring, ducting and vents are concealed cleanly, not boxed in as an afterthought."],
  ["Room-specific design", "Simple perimeter ceilings for bedrooms, more detailed tray or floating designs for living and dining areas, matched to each room's function."]
];

const faqs = [
  {
    q: "Gypsum or POP — which is better?",
    a: "Both are used depending on the design. Gypsum board is faster to install and lower-mess; POP allows more elaborate cornice and curved detailing. We'll recommend based on your ceiling design and timeline."
  },
  {
    q: "Does false ceiling work affect the AC or electrical layout?",
    a: "Yes, and we plan for that — ceiling design is coordinated with AC ducting and electrical points so cables and vents are concealed properly rather than retrofitted afterward."
  },
  {
    q: "Will a false ceiling reduce my room's height noticeably?",
    a: "A well-planned false ceiling typically reduces height by a few inches at most, concentrated where wiring or ducting needs to be hidden — we design around your existing ceiling height rather than a fixed drop."
  },
  {
    q: "Is false ceiling work covered under warranty?",
    a: "Yes, false ceiling work is covered under Decoory's standard 10-year warranty as part of any turnkey project."
  },
  {
    q: "How do I get a false ceiling design consultation?",
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
            serviceType: "False Ceiling Design and Installation",
            provider: providerSchema,
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="False Ceiling in Greater Noida West" />
      <LandingHero
        eyebrow="False Ceilings"
        h1="False Ceiling Design in Greater Noida West"
        subhead="Layered ceilings and concealed lighting that make every room feel finished, planned alongside your electrical and AC layout, not as an afterthought."
        image="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2200&q=86"
        imageAlt="False ceiling design in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Ceiling Design" title="Detail that makes a room feel finished" />
          <div className="grid gap-4 md:grid-cols-2">
            {styles.map(([title, desc]) => (
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
          { label: "False Ceiling Cost in Greater Noida", href: "/blog/false-ceiling-cost-in-greater-noida" },
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="False Ceiling Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
