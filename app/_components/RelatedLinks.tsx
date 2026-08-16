import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedLink } from "../blog/articles";

export default function RelatedLinks({ label = "Related", links }: { label?: string; links: RelatedLink[] }) {
  if (!links.length) return null;

  return (
    <section className="py-16">
      <div className="luxury-container max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#c8a96a]">{label}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 border border-white/12 bg-white/[0.03] px-5 py-4 text-[#eadcc4] transition hover:border-[#c8a96a]/60"
            >
              <span>{link.label}</span>
              <ArrowRight size={16} className="shrink-0 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
