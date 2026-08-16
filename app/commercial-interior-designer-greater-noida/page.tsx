import type { Metadata } from "next";
import LandingLayout from "../_components/LandingLayout";
import LandingHero from "../_components/LandingHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionIntro from "../_components/SectionIntro";
import FaqSection from "../_components/FaqSection";
import ConsultationForm from "../_components/ConsultationForm";
import RelatedLinks from "../_components/RelatedLinks";
import { PHONE_DISPLAY, providerSchema } from "../site-config";

export const metadata: Metadata = {
  title: "Commercial Interior Designer in Greater Noida",
  description:
    "Commercial interior design and fit-out in Greater Noida — offices, retail spaces and showrooms, planned and executed by the same turnkey design and execution team behind Decoory's home interiors.",
  alternates: { canonical: "/commercial-interior-designer-greater-noida" }
};

const capabilities = [
  ["Office fit-outs", "Workstation layout, meeting rooms, reception design and false ceiling/lighting planned around how the space will actually be used day to day."],
  ["Retail & showroom interiors", "Layouts designed to guide footfall and display product clearly, with lighting and finishes suited to a commercial, higher-traffic environment."],
  ["Civil, electrical & false ceiling", "The same in-house civil, electrical and false ceiling execution used on residential turnkey projects, applied to commercial floor plates and compliance needs."],
  ["Single point of accountability", "One design and execution team for the full commercial fit-out, rather than coordinating separate design and contracting firms."]
];

const faqs = [
  {
    q: "Do you only design homes, or also commercial spaces?",
    a: "We take on commercial fit-out projects — offices, retail and showroom spaces — using the same in-house design, civil, electrical and execution team behind our residential turnkey work."
  },
  {
    q: "What's included in a commercial interior project?",
    a: "Design, layout planning, civil work, electrical, false ceiling, painting and furniture/fixtures, scoped to your specific commercial space and use case."
  },
  {
    q: "Can you work around an active business's operating hours?",
    a: "Yes, we'll discuss your operating constraints during the site visit and plan the work schedule to minimise disruption where possible."
  },
  {
    q: "Is commercial work covered under warranty?",
    a: "Yes, Decoory's standard 10-year warranty applies to commercial projects on the same basis as residential ones."
  },
  {
    q: "How do I discuss a commercial project?",
    a: `Book a consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY} to discuss your space and requirements.`
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
            serviceType: "Commercial Interior Design",
            provider: providerSchema,
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="Commercial Interior Designer in Greater Noida" />
      <LandingHero
        eyebrow="Commercial Interiors"
        h1="Commercial Interior Designer in Greater Noida"
        subhead="Office, retail and showroom fit-outs, planned and executed by the same turnkey design and execution team behind Decoory's home interiors."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Commercial interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Capabilities" title="Office, retail and showroom fit-outs" />
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(([title, desc]) => (
              <div key={title} className="border border-white/12 bg-white/[0.035] p-6">
                <h3 className="font-display text-2xl font-semibold text-[#fff6e8]">{title}</h3>
                <p className="mt-3 leading-7 text-[#bdb3a7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Turnkey Interior Designer in Greater Noida West", href: "/turnkey-interior-designer-greater-noida-west" },
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Commercial Interior Designer Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
