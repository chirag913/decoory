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
  title: "Interior Designer in Greater Noida West",
  description:
    "Decoory Interiors is a Greater Noida West-based turnkey interior designer covering design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture under one roof, with a studio in Gaur City 1.",
  alternates: { canonical: "/interior-designer-greater-noida-west" }
};

const focusServices = [
  ["Full Home Interiors", "Complete apartment and villa interiors planned around real Greater Noida West floor plans and builder handover conditions."],
  ["Modular Kitchens", "Space-efficient kitchen layouts suited to the compact and mid-size kitchen footprints common across Greater Noida West societies."],
  ["Civil & Electrical Work", "Wall alterations, false ceiling structures, wiring and plumbing changes handled in-house rather than outsourced to separate contractors."],
  ["Wardrobes & Storage", "Custom storage designed for typical 2BHK and 3BHK carpet areas without eating into usable room space."],
  ["False Ceilings & Painting", "Layered ceiling, lighting and painting finishes that hold up to the higher humidity and dust conditions of newly-handed-over towers."],
  ["Furniture & Woodwork", "In-house woodwork for TV units, beds, dining and study units, finished and installed by the same team that designed them."]
];

const faqs = [
  {
    q: "Is Decoory Interiors actually based in Greater Noida West, or just serving it remotely?",
    a: "Our studio is physically located inside Gaur City 1, Sector 4, Greater Noida West. Site visits, material selection and project supervision are all handled by a team working locally, not a Delhi or Noida office visiting occasionally."
  },
  {
    q: "Do you handle the full scope, or only design and decor?",
    a: "Full turnkey scope: design, civil work, electrical, plumbing, false ceiling, painting, furniture and woodwork under a single contract and a single supervising team, so you are not coordinating separate contractors."
  },
  {
    q: "Which Greater Noida West societies do you work in?",
    a: "We take on projects across Greater Noida West, including Gaur City 1 and Gaur City 2 societies and other residential towers in the area. Tell us your society and tower during consultation and we'll confirm familiarity with the layout."
  },
  {
    q: "Do Greater Noida West projects come with a warranty?",
    a: "Yes. Every turnkey project comes with Decoory's 10-year warranty, regardless of scope size."
  },
  {
    q: "How do I start a project?",
    a: `Book a free consultation through this page, WhatsApp, or call us at ${PHONE_DISPLAY}. We'll schedule a site visit and walk you through design direction, scope and next steps before any commitment.`
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
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Interior Designer in Greater Noida West" />
      <LandingHero
        eyebrow="Interior Designer in Greater Noida West"
        h1="Interior Designer in Greater Noida West"
        subhead="Design, Woodwork, Civil, Electrical, Plumbing, False Ceiling, Painting & Furniture — complete turnkey interiors from a team based right inside Greater Noida West."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Turnkey home interior in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Local Presence"
            title="A Greater Noida West studio, not a visiting firm"
            copy="Decoory Interiors is headquartered inside Gaur City 1, Sector 4 — in the middle of the area we design for. That means faster site visits, direct familiarity with local tower layouts and handover conditions, and a team that's genuinely reachable, not routed through a distant regional office."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {focusServices.map(([title, desc]) => (
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
          { label: "Turnkey Interior Designer in Greater Noida West", href: "/turnkey-interior-designer-greater-noida-west" },
          { label: "Modular Kitchen in Greater Noida West", href: "/modular-kitchen-greater-noida-west" },
          { label: "Interior Designer in Gaur City", href: "/interior-designer-gaur-city" },
          { label: "Best Interior Designer in Greater Noida West: Complete Guide", href: "/blog/best-interior-designer-in-greater-noida-west-guide" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Interior Designer Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
