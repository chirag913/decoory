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
  title: "Interior Designer in Greater Noida",
  description:
    "Turnkey interior design across Greater Noida — apartments, independent floors and villas. Design, woodwork, civil, electrical, plumbing, false ceiling, painting and furniture from a studio based in the Greater Noida region.",
  alternates: { canonical: "/interior-designer-greater-noida" }
};

const coverage = [
  ["Apartments across Greater Noida", "High-rise society interiors across Alpha, Beta, Gamma, Zeta, Omicron and surrounding sectors, designed for real carpet areas, not showroom mock-ups."],
  ["Independent floors & villas", "Greater Noida has a higher share of independent floors and villas than Greater Noida West — we plan for larger room counts, multiple floors and outdoor-facing spaces."],
  ["Knowledge Park & Surajpur corridor", "Interiors for homes near the Knowledge Park and Surajpur institutional belt, including compact rental-ready units and larger owner-occupied homes."],
  ["One contract, full scope", "Design, civil work, electrical, plumbing, false ceiling, painting, woodwork and furniture — a single turnkey scope instead of coordinating separate vendors across a large project."]
];

const faqs = [
  {
    q: "Do you cover all of Greater Noida, or only Greater Noida West?",
    a: "Both. Greater Noida West (Gaur City, Noida Extension) is where our studio is based, and we regularly take on projects across the wider Greater Noida region — Alpha, Beta, Gamma, Zeta, Pari Chowk and nearby sectors."
  },
  {
    q: "Do you design for villas and independent floors, not just apartments?",
    a: "Yes. Greater Noida has more independent floors and villas than the newer high-rise-heavy Greater Noida West, and our scope covers multi-floor layouts, staircases and outdoor-facing rooms, not just flat interiors."
  },
  {
    q: "What is included in a turnkey Greater Noida project?",
    a: "Design, woodwork, civil work, electrical, plumbing, false ceiling, painting and furniture, all supervised by Decoory directly under one contract."
  },
  {
    q: "Is there a warranty on the work?",
    a: "Yes — every turnkey project includes Decoory's 10-year warranty, regardless of whether it's an apartment, floor or villa."
  },
  {
    q: "How do I start?",
    a: `Use the consultation form on this page, WhatsApp us, or call ${PHONE_DISPLAY}. We'll schedule a site visit before discussing scope in detail.`
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
            areaServed: "Greater Noida"
          })
        }}
      />
      <Breadcrumbs label="Interior Designer in Greater Noida" />
      <LandingHero
        eyebrow="Interior Designer in Greater Noida"
        h1="Interior Designer in Greater Noida"
        subhead="Design, Woodwork, Civil, Electrical, Plumbing, False Ceiling, Painting & Furniture — turnkey interiors for apartments, floors and villas across Greater Noida."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=86"
        imageAlt="Villa and apartment interior design in Greater Noida"
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Greater Noida Coverage"
            title="Apartments, independent floors and villas across the region"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {coverage.map(([title, desc]) => (
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
          { label: "3 BHK Interior Design in Greater Noida", href: "/3bhk-interior-design-greater-noida" },
          { label: "4 BHK Interior Design in Greater Noida", href: "/4bhk-interior-design-greater-noida" },
          { label: "Interior Designer in Greater Noida West", href: "/interior-designer-greater-noida-west" }
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Interior Designer Greater Noida landing page" />
        </div>
      </section>
    </LandingLayout>
  );
}
