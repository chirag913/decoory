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
  title: "Wardrobe Interior Design in Greater Noida West",
  description:
    "Custom wardrobe design for Greater Noida West homes — sliding, hinged and walk-in wardrobes with internal storage planning, finished and installed in-house by Decoory Interiors.",
  alternates: { canonical: "/wardrobe-interior-greater-noida-west" }
};

const options = [
  ["Sliding vs hinged", "Sliding shutters save floor clearance in smaller bedrooms; hinged shutters give full-width access. We recommend based on room size and door swing, not a default preference."],
  ["Walk-in vs built-in", "Walk-in units where the room allows for it, built-in storage-wall wardrobes where floor space is tighter — both designed to actually fit your carpet area."],
  ["Internal organisers", "Drawer units, pull-down hanger rods, shoe racks and sectioned shelving planned around what you actually store, not a generic internal layout."],
  ["Loft & overhead storage", "Loft storage designed for seasonal and low-frequency items, kept structurally sound and easy to access safely."]
];

const faqs = [
  {
    q: "Can you design wardrobes for small bedrooms?",
    a: "Yes. Sliding shutters and floor-to-ceiling storage-wall designs are commonly used in smaller Greater Noida West bedrooms to maximise storage without eating into usable floor space."
  },
  {
    q: "What finishes are available for wardrobe shutters?",
    a: "Laminate, acrylic, PU and mirror/glass finishes, matched to the rest of your bedroom's design language."
  },
  {
    q: "Do you design the internal storage layout too?",
    a: "Yes, internal organisation (hanging space, drawers, shelving, shoe racks) is planned alongside the shutter design, not left as an afterthought."
  },
  {
    q: "Is wardrobe work covered under warranty?",
    a: "Yes, wardrobes are covered under Decoory's standard 10-year warranty as part of any turnkey project."
  },
  {
    q: "How do I get a wardrobe design consultation?",
    a: `Book a free consultation on this page, WhatsApp us, or call ${PHONE_DISPLAY}. We'll measure the space and discuss layout options before quoting.`
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
            serviceType: "Wardrobe and Storage Design",
            provider: providerSchema,
            areaServed: "Greater Noida West"
          })
        }}
      />
      <Breadcrumbs label="Wardrobe Interior in Greater Noida West" />
      <LandingHero
        eyebrow="Wardrobes & Storage"
        h1="Wardrobe Interior Design in Greater Noida West"
        subhead="Sliding, hinged and walk-in wardrobes designed around your actual room size and storage needs, not a generic template."
        image="https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Custom wardrobe design in Greater Noida West"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro eyebrow="Storage Planning" title="Wardrobes built around what you actually own" />
          <div className="grid gap-4 md:grid-cols-2">
            {options.map(([title, desc]) => (
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
          { label: "Modern Wardrobe Design Ideas for 2 BHK Homes", href: "/blog/modern-wardrobe-design-ideas-for-2bhk-homes" },
          { label: "Modern Wardrobe Design Ideas for Greater Noida West Homes", href: "/blog/modern-wardrobe-design-ideas-for-greater-noida-west-homes" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Wardrobe Interior Greater Noida West landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
