import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingLayout from "../_components/LandingLayout";
import Breadcrumbs from "../_components/Breadcrumbs";
import SectionIntro from "../_components/SectionIntro";
import ConsultationForm from "../_components/ConsultationForm";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Interior Design Guides & Ideas | Decoory Interiors",
  description:
    "Interior design guides, cost breakdowns and design ideas for Greater Noida West, Noida Extension, Greater Noida and Gaur City homes, from Decoory Interiors.",
  alternates: { canonical: "/blog" }
};

const categories = Array.from(new Set(articles.map((article) => article.category)));

export default function BlogIndex() {
  return (
    <LandingLayout>
      <Breadcrumbs label="Blog" />
      <section className="pb-24 pt-6 md:pb-28">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Guides & Ideas"
            title="Interior Design Guides for Greater Noida Homes"
            copy="Cost frameworks, buying guides and design ideas for Greater Noida West, Noida Extension, Greater Noida and Gaur City — written to be genuinely useful, not just keyword pages."
          />
          <div className="grid gap-16">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="mb-6 font-display text-2xl font-semibold text-[#fff6e8] md:text-3xl">{category}</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {articles
                    .filter((article) => article.category === category)
                    .map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="group flex items-center justify-between gap-4 border border-white/12 bg-white/[0.03] px-5 py-4 text-[#eadcc4] transition hover:border-[#c8a96a]/60"
                      >
                        <span>{article.title}</span>
                        <ArrowRight size={16} className="shrink-0 transition group-hover:translate-x-1" />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source="Blog index page" />
        </div>
      </section>
    </LandingLayout>
  );
}
