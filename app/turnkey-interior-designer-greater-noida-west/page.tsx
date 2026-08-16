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
  title: "Turnkey Interior Designer in Greater Noida West",
  description:
    "One contract, one team, one warranty. Turnkey interior design in Greater Noida West covering design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture from Decoory Interiors.",
  alternates: { canonical: "/turnkey-interior-designer-greater-noida-west" }
};

const phases = [
  ["Consultation & Site Visit", "We visit your Greater Noida West flat, take measurements, and understand your budget, timeline and design direction before proposing anything."],
  ["Design & 3D Visualization", "Layout, material and lighting decisions are finalised and shown to you in 3D before any execution work begins."],
  ["Civil, Electrical & Plumbing", "Structural changes, wiring and plumbing work handled directly by our team, coordinated with the design and woodwork schedule."],
  ["False Ceiling, Painting & Woodwork", "Finishing trades sequenced so ceiling, paint and carpentry don't conflict with each other on site."],
  ["Furniture Install & Handover", "Final furniture placement, snag-list walkthrough, and handover — with the 10-year warranty starting from this point."]
];

const faqs = [
  {
    q: "What does 'turnkey' actually mean here?",
    a: "One contract and one supervising team for the entire scope — design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture — instead of you coordinating separate contractors for each trade."
  },
  {
    q: "Why choose turnkey over hiring separate contractors myself?",
    a: "A single point of accountability. If a ceiling issue affects the electrical layout, or a civil change affects furniture placement, one team resolves it internally instead of contractors blaming each other."
  },
  {
    q: "Do you handle structural/civil changes, or only decor?",
    a: "Full scope, including civil work such as wall changes, false ceiling structures, plumbing relocations and electrical rewiring where needed."
  },
  {
    q: "Is the entire turnkey scope covered under warranty?",
    a: "Yes — the complete turnkey scope, not just furniture, is covered under Decoory's 10-year warranty."
  },
  {
    q: "How do I start a turnkey project?",
    a: `Book a free consultation through this page, WhatsApp, or call ${PHONE_DISPLAY}. We'll schedule a site visit before discussing scope and design direction.`
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
            serviceType: "Turnkey Interior Design and Execution",
            provider: providerSchema,
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Turnkey Interior Designer in Greater Noida West" />
      <LandingHero
        eyebrow="Turnkey Execution"
        h1="Turnkey Interior Designer in Greater Noida West"
        subhead="Design, Woodwork, Civil, Electrical, Plumbing, False Ceiling, Painting & Furniture — one contract, one team, one warranty."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Turnkey interior execution in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="How It Works" title="Five phases, one accountable team" />
          <div className="grid gap-4 lg:grid-cols-5">
            {phases.map(([title, desc], index) => (
              <div key={title} className="border border-white/12 bg-white/[0.035] p-6">
                <span className="text-xs uppercase tracking-[0.28em] text-[#c8a96a]">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#fff6e8]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#bdb3a7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyDecoorySection />
      <FaqSection faqs={faqs} />
      <RelatedLinks
        links={[
          { label: "Turnkey Interior Design: What Does It Include?", href: "/blog/turnkey-interior-design-what-does-it-include" },
          { label: "What to Expect From a Turnkey Interior Project in Greater Noida West", href: "/blog/what-to-expect-from-a-turnkey-interior-project-in-greater-noida-west" },
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Turnkey Interior Designer Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
