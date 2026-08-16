import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

export default function LandingHero({
  eyebrow,
  h1,
  subhead,
  image,
  imageAlt
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="noise relative flex min-h-[85vh] items-end overflow-hidden pb-20 pt-40 md:pb-24">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.86),rgba(8,7,6,.42),rgba(8,7,6,.08)),linear-gradient(0deg,rgba(8,7,6,.92),transparent_42%,rgba(8,7,6,.18))]" />
      <div className="luxury-container relative z-10">
        <p className="mb-5 inline-flex items-center gap-3 border border-[#c8a96a]/35 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#eadcc4] backdrop-blur">
          <Sparkles size={15} className="text-[#c8a96a]" /> {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-[#fff7eb] md:text-6xl lg:text-[3.6rem]">
          {h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ded2bf] md:text-xl">{subhead}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#consultation"
            className="magnetic inline-flex items-center justify-center gap-3 bg-[#eadcc4] px-7 py-4 font-semibold text-[#11100e]"
          >
            Book Free Consultation <CalendarDays size={18} />
          </a>
          <Link
            href="/#projects"
            className="magnetic inline-flex items-center justify-center gap-3 border border-white/18 bg-white/5 px-7 py-4 font-semibold text-[#fff7eb] backdrop-blur"
          >
            View Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
