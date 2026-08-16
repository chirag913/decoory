import SectionIntro from "./SectionIntro";

export type Faq = { q: string; a: string };

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="border-y hairline bg-[#0d0c0a] py-24 md:py-28">
      <div className="luxury-container">
        <SectionIntro eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto grid max-w-3xl gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border border-white/12 bg-white/[0.03] p-6">
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-[#fff6e8] marker:content-none">
                {faq.q}
              </summary>
              <p className="mt-4 leading-7 text-[#bdb3a7]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          })
        }}
      />
    </section>
  );
}
