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
  title: "Home Renovation in Greater Noida West",
  description:
    "Home renovation in Greater Noida West — kitchen and bathroom upgrades, false ceiling and painting refresh, full-flat renovation around existing civil structure. Handled directly by Decoory Interiors.",
  alternates: { canonical: "/home-renovation-greater-noida-west" }
};

const considerations = [
  ["Working with existing structure", "Renovation means designing around plumbing points, electrical risers and civil walls that already exist, rather than starting from a bare shell — every renovation quote accounts for this."],
  ["Occupied vs vacant renovation", "We plan work sequencing differently depending on whether you're living in the flat during renovation or have moved out, to minimise disruption where possible."],
  ["Partial vs full renovation", "Kitchen-only, bathroom-only or full-flat renovation are scoped and sequenced differently — partial renovations still need coordination with existing finishes so the result looks intentional, not patched."],
  ["Common renovation triggers", "Outdated kitchens, worn-out flooring, water-damaged ceilings, and preparing a flat for resale are the most common reasons Greater Noida West homeowners renovate — each has a different priority order."]
];

const faqs = [
  {
    q: "Can you renovate while I'm still living in the flat?",
    a: "In many cases yes, particularly for partial renovations like a kitchen or one bathroom. Full-flat renovations are usually easier and faster with the flat vacated, and we'll advise honestly based on your specific scope."
  },
  {
    q: "Do you handle plumbing and electrical rework, or only cosmetic changes?",
    a: "Full scope — civil work, plumbing and electrical rework are handled directly where the renovation requires it, not just surface-level painting or fittings."
  },
  {
    q: "Can you renovate just the kitchen or just one bathroom?",
    a: "Yes, partial renovations are common. We scope and quote based on exactly what you want renovated, not a forced full-flat package."
  },
  {
    q: "Is renovation work covered under warranty?",
    a: "Yes, renovation work is covered under Decoory's standard 10-year warranty, the same as new turnkey projects."
  },
  {
    q: "How do I get a renovation quote?",
    a: `Book a free consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY}. We'll visit the site to assess existing conditions before quoting.`
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
            serviceType: "Home Renovation",
            provider: providerSchema,
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Home Renovation in Greater Noida West" />
      <LandingHero
        eyebrow="Home Renovation"
        h1="Home Renovation in Greater Noida West"
        subhead="Kitchen, bathroom and full-flat renovation planned around your existing civil structure, not a blank-slate redesign."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Home renovation in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Renovation Planning" title="What's different about renovating an existing home" />
          <div className="grid gap-4 md:grid-cols-2">
            {considerations.map(([title, desc]) => (
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
          { label: "Home Interior Transformation: What Before & After Really Involves", href: "/blog/home-interior-transformation-before-and-after-explained" },
          { label: "Interior Design Mistakes New Homeowners Should Avoid", href: "/blog/interior-design-mistakes-new-homeowners-should-avoid" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Home Renovation Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
