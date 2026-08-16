import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ label }: { label: string }) {
  const items = [
    { name: "Home", url: "https://decoory.com/" },
    { name: label, url: undefined }
  ];

  return (
    <nav aria-label="Breadcrumb" className="luxury-container pb-6 pt-28 md:pt-32">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[#9f9589]">
        <li>
          <Link href="/" className="hover:text-[#eadcc4]">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight size={12} />
        </li>
        <li className="text-[#c8a96a]">{label}</li>
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              ...(item.url ? { item: item.url } : {})
            }))
          })
        }}
      />
    </nav>
  );
}
