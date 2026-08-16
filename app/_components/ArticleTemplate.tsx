import LandingLayout from "./LandingLayout";
import Breadcrumbs from "./Breadcrumbs";
import FaqSection from "./FaqSection";
import ConsultationForm from "./ConsultationForm";
import RelatedLinks from "./RelatedLinks";
import type { Article } from "../blog/articles";
import { providerSchema } from "../site-config";

export default function ArticleTemplate({ article }: { article: Article }) {
  return (
    <LandingLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            author: { "@type": "Organization", name: "Decoory Interiors" },
            publisher: providerSchema
          })
        }}
      />
      <Breadcrumbs label={article.title} />

      <article className="pb-24 pt-6 md:pb-28">
        <div className="luxury-container max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#c8a96a]">{article.category}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-[#fff7eb] md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#ded2bf]">{article.intro}</p>

          <div className="mt-12 grid gap-10">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-[#fff6e8] md:text-3xl">{section.heading}</h2>
                <p className="mt-3 leading-8 text-[#bdb3a7]">{section.body}</p>
              </div>
            ))}
          </div>

        </div>
      </article>

      <RelatedLinks links={article.related} />
      {article.faqs?.length ? <FaqSection faqs={article.faqs} /> : null}

      <section className="border-t hairline py-24 md:py-28">
        <div className="luxury-container">
          <ConsultationForm source={`Blog: ${article.title}`} />
        </div>
      </section>
    </LandingLayout>
  );
}
