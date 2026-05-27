"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChefHat,
  ChevronDown,
  Clock,
  Facebook,
  Gem,
  Home,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Quote,
  Sofa,
  Sparkles,
  Star,
  Tv,
  X,
  Youtube
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919821545511?text=Hi%20Decoory%20Interiors%2C%20I%20want%20to%20book%20a%20free%20luxury%20interior%20consultation.";

const LEAD_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxyI4wwv0WxK1VoWoCvWaKEzPB95bFQ0kkU87Tk41k3FtJ3iZIZeHH-_AdqdP7J9R1a/exec";

const MAPS_URL =
  "https://maps.app.goo.gl/gedreZ25HHour9yKA";

const navItems = ["Projects", "Services", "Process", "Testimonials", "Contact"];

const heroSlides = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=86",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=86",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=86"
];

const categories = [
  "All",
  "Luxury Living Rooms",
  "Modular Kitchens",
  "Premium Bedrooms",
  "TV Units",
  "Luxury Villas",
  "Dining Spaces",
  "Wardrobes",
  "False Ceiling Designs"
];

const projects = [
  {
    title: "Skyline Villa Lounge",
    category: "Luxury Living Rooms",
    tag: "Warm Modern",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=84",
    tall: true
  },
  {
    title: "Noida Penthouse Kitchen",
    category: "Modular Kitchens",
    tag: "Italian Finish",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=84"
  },
  {
    title: "Estate Master Suite",
    category: "Premium Bedrooms",
    tag: "Hotel Luxury",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=84",
    tall: true
  },
  {
    title: "Statement TV Wall",
    category: "TV Units",
    tag: "Wall Panelling",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=84"
  },
  {
    title: "Modern Indian Villa",
    category: "Luxury Villas",
    tag: "Bespoke",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=84",
    tall: true
  },
  {
    title: "Marble Dining Salon",
    category: "Dining Spaces",
    tag: "Statement Stone",
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=84"
  },
  {
    title: "Walk-in Wardrobe Gallery",
    category: "Wardrobes",
    tag: "Custom Storage",
    image:
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=84"
  },
  {
    title: "Cove Ceiling Residence",
    category: "False Ceiling Designs",
    tag: "Ambient Lighting",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=84"
  }
];

const services = [
  ["Full Home Interiors", Home, "Complete home transformations planned around family lifestyle, storage and everyday comfort."],
  ["Modular Kitchens", ChefHat, "Premium kitchen systems with elegant shutters, Italian finishes and intelligent storage."],
  ["Luxury Bedrooms", Sparkles, "Hotel-inspired bedrooms with warm lighting, soft textures and refined wall treatments."],
  ["Living Room Design", Sofa, "Rich, welcoming living spaces designed for hosting, relaxing and everyday pride."],
  ["Wardrobes & Storage", Gem, "Designer wardrobes, walk-ins and space-saving storage tailored to Indian homes."],
  ["TV Units", Tv, "Statement media walls with panelling, lighting, display storage and concealed wiring."],
  ["False Ceilings", Layers3, "Layered ceilings and lighting scenes that make every room feel finished and premium."],
  ["Lighting Design", Sparkles, "Warm ambient lighting plans that make finishes, furniture and moods feel expensive."],
  ["Dining Areas", Sofa, "Elegant dining spaces for family dinners, hosting and everyday luxury."],
  ["Space-Saving Furniture", Gem, "Smart beds, storage walls and compact furniture for modern apartments."],
  ["Premium Apartments", Building2, "High-end apartment interiors planned to maximize space, finish quality and resale value."],
  ["Villas & Homes", Home, "Large-format home interiors with cohesive room-to-room design language."]
];

const process = [
  "Consultation",
  "Concept & Planning",
  "3D Visualization",
  "Material Selection",
  "Execution",
  "Final Reveal"
];

const testimonials = [
  {
    name: "Ananya Mehra",
    location: "Luxury Apartment, Noida",
    quote:
      "Decoory made our apartment look like a private residence from an international design magazine. The execution was calm, premium and extremely detailed.",
    budget: "Rs 38L project"
  },
  {
    name: "Rohit Suri",
    location: "Villa Owner, Delhi NCR",
    quote:
      "The team understood luxury without overdoing it. Materials, lighting and furniture came together beautifully, and the handover felt truly professional.",
    budget: "Rs 82L project"
  },
  {
    name: "Priya & Karan",
    location: "Penthouse, Gurugram",
    quote:
      "We compared multiple firms. Decoory stood out because their design language felt elevated and their process gave us confidence from day one.",
    budget: "Rs 56L project"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

function slug(label: string) {
  return label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function Logo() {
  return (
    <Link href="#top" className="group flex items-center" aria-label="Decoory Interiors home">
      <img
        src="/logo.png"
        alt="Decoory Interiors"
        className="h-14 w-auto md:h-16"
      />
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#c8a96a]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[0.96] text-[#fff6e8] md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#bdb3a7] md:text-lg">
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    const interval = window.setInterval(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      5200
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%"
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  formData.set("source", "Decoory website consultation form");
  formData.set("pageUrl", window.location.href);
  formData.set("submittedAt", new Date().toISOString());

  setFormStatus("submitting");

  try {
    await fetch(LEAD_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
body: new URLSearchParams(formData as unknown as Record<string, string>),
    });
    setFormStatus("success");
    form.reset();
  } catch {
    setFormStatus("error");
  }
}

  return (
    <main id="top" className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesignService",
            name: "Decoory Interiors",
            image:
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=82",
            telephone: "+91 9821545511",
            email: "hello@decoory.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "GF -71, center, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201318",
              addressCountry: "IN"
            },
            areaServed: ["Noida", "Delhi NCR", "Gurugram", "Ghaziabad"],
            priceRange: "Rs Rs Rs Rs",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "247"
            }
          })
        }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080706]/55 backdrop-blur-xl">
        <nav className="luxury-container flex h-20 items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${slug(item)}`}
                className="text-sm text-[#d8cebf]/80 transition hover:text-[#f8ecd8]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919821545511"
              className="magnetic flex items-center gap-2 border border-white/15 px-4 py-3 text-sm text-[#f4eadc]"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="#consultation"
              className="magnetic flex items-center gap-2 bg-[#eadcc4] px-5 py-3 text-sm font-semibold text-[#12100d]"
            >
              Book Consultation <ArrowRight size={16} />
            </a>
          </div>
          <button
            className="grid size-11 place-items-center border border-white/15 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#080706]/96 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                className="grid size-11 place-items-center border border-white/15"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="mt-16 grid gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${slug(item)}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-[#fff6e8]"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-12 grid gap-3">
              <a href={WHATSAPP_URL} className="bg-[#eadcc4] px-5 py-4 text-center font-semibold text-[#12100d]">
                WhatsApp Now
              </a>
              <a href="tel:+919821545511" className="border border-white/15 px-5 py-4 text-center text-[#f4eadc]">
                Call +91 98215 45511
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section className="noise relative flex min-h-screen items-end overflow-hidden pb-56 pt-32 lg:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[slide]}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[slide]}
              alt="Cinematic luxury interior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.86),rgba(8,7,6,.42),rgba(8,7,6,.08)),linear-gradient(0deg,rgba(8,7,6,.92),transparent_42%,rgba(8,7,6,.18))]" />
        <div className="luxury-container relative z-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex items-center gap-3 border border-[#c8a96a]/35 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#eadcc4] backdrop-blur">
              <Sparkles size={15} className="text-[#c8a96a]" /> Luxury home interiors
            </p>
            <h1 className="max-w-5xl font-display text-6xl font-semibold leading-[0.9] text-[#fff7eb] md:text-8xl lg:text-[5.4rem] xl:text-[6rem]">
              Designing Spaces That Define Luxury
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ded2bf] md:text-xl">
              Premium home interiors for modern apartments, villas and luxury Indian homes.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 md:hidden">
              {[
                ["500+", "Projects"],
                ["10+", "Years"],
                ["98%", "Satisfaction"],
                ["Turnkey", "Homes"]
              ].map(([stat, label]) => (
                <div key={label} className="border border-white/14 bg-black/35 p-3 backdrop-blur">
                  <p className="font-display text-2xl font-semibold text-[#fff6e8]">{stat}</p>
                  <p className="text-xs text-[#c9beb0]">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation"
                className="magnetic inline-flex items-center justify-center gap-3 bg-[#eadcc4] px-7 py-4 font-semibold text-[#11100e]"
              >
                Book Free Consultation <CalendarDays size={18} />
              </a>
              <a
                href="#projects"
                className="magnetic inline-flex items-center justify-center gap-3 border border-white/18 bg-white/5 px-7 py-4 font-semibold text-[#fff7eb] backdrop-blur"
              >
                View Projects <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.9, ease: "easeOut" }}
            className="glass hidden grid-cols-2 divide-x divide-y divide-white/10 md:grid md:grid-cols-4 md:divide-y-0 lg:grid-cols-2 lg:divide-y"
          >
            {[
              ["500+", "Projects"],
              ["10+", "Years Experience"],
              ["98%", "Client Satisfaction"],
              ["End-to-End", "Execution"]
            ].map(([stat, label]) => (
              <div key={label} className="p-5 md:p-6">
                <p className="font-display text-3xl font-semibold text-[#fff6e8] md:text-4xl">{stat}</p>
                <p className="mt-2 text-sm text-[#bdb3a7]">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <a
          href="#trust"
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#bdb3a7] md:flex"
        >
          Scroll <ChevronDown size={16} />
        </a>
      </section>

      <section id="trust" className="border-y hairline bg-[#0b0a09] py-16">
        <div className="luxury-container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="gsap-reveal">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c8a96a]">Authority</p>
              <h2 className="font-display text-4xl font-semibold text-[#fff6e8] md:text-5xl">
                Trusted By Hundreds Of Premium Homeowners
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {["Google 4.9", "AD Select", "ISO Process", "Houzz Rated"].map((item) => (
                <div key={item} className="glass p-5 text-center">
                  <Star className="mx-auto mb-3 text-[#c8a96a]" size={20} fill="currentColor" />
                  <p className="text-sm font-semibold text-[#f5ead9]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass p-6"
              >
                <Quote className="mb-6 text-[#c8a96a]" size={26} />
                <p className="leading-8 text-[#ddd2c3]">{testimonial.quote}</p>
                <div className="mt-8 flex items-center justify-between border-t hairline pt-5">
                  <div>
                    <p className="font-semibold text-[#fff7eb]">{testimonial.name}</p>
                    <p className="text-sm text-[#9f9589]">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-[#c8a96a]">{testimonial.budget}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 md:py-32">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Featured Projects"
            title="Editorial interiors built for modern luxury living"
            copy="A curated view of living rooms, villas, modular kitchens, bedrooms and storage-led home transformations designed to feel rich, personal and beautifully executed."
          />
          <div className="scrollbar-hide mb-10 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`magnetic shrink-0 border px-4 py-3 text-sm ${
                  activeCategory === category
                    ? "border-[#c8a96a] bg-[#c8a96a] text-[#11100e]"
                    : "border-white/14 bg-white/[0.03] text-[#d8cebf]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="masonry">
            {filteredProjects.map((project) => (
              <motion.button
                layout
                key={project.title}
                onClick={() => setActiveProject(project)}
                className="masonry-item group relative w-full overflow-hidden text-left"
              >
                <div className={`relative ${project.tall ? "h-[520px]" : "h-[360px]"} min-h-[340px]`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1080px) 33vw, (min-width: 760px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/14 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#c8a96a]">{project.tag}</p>
                    <h3 className="font-display text-3xl font-semibold text-[#fff7eb]">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#c9beb0]">{project.category}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eadf] py-24 text-[#15120e] md:py-32">
        <div className="luxury-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-[560px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1400&q=84"
              alt="Decoory founder reviewing a luxury interior"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#15120e]/80 p-6 text-[#fff7eb] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96a]">Brand Philosophy</p>
              <p className="mt-3 font-display text-3xl leading-tight">Luxury feels effortless when every detail is intentional.</p>
            </div>
          </motion.div>
          <div className="gsap-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#8a6a2e]">About Decoory</p>
            <h2 className="font-display text-5xl font-semibold leading-none md:text-7xl">
              We do not just design interiors. We create experiences that elevate everyday living.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d554b]">
              Decoory Interiors brings design strategy, technical planning, premium materials and disciplined execution into one seamless journey. Every project is composed around proportion, light, texture and the way you actually live.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["Design Studio", "Execution Team", "Vendor Network"].map((item) => (
                <div key={item} className="border border-black/10 bg-white/45 p-5">
                  <BadgeCheck className="mb-4 text-[#8a6a2e]" size={22} />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Services"
            title="Premium home interior services for high-value residences"
            copy="From full-home interiors to modular kitchens, wardrobes and lighting, every service is designed to make your home feel aspirational, functional and unmistakably premium."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, Icon, description]) => (
              <motion.article
                key={title as string}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group border border-white/12 bg-white/[0.035] p-6 transition hover:border-[#c8a96a]/60 hover:bg-[#c8a96a]/10"
              >
                <Icon className="mb-10 text-[#c8a96a]" size={30} />
                <h3 className="font-display text-3xl font-semibold text-[#fff6e8]">{title as string}</h3>
                <p className="mt-4 min-h-24 leading-7 text-[#bdb3a7]">{description as string}</p>
                <a href="#consultation" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#eadcc4]">
                  Discuss project <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y hairline bg-[#0d0c0a] py-24 md:py-32">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Process"
            title="A calm, exacting journey from vision to handover"
          />
          <div className="grid gap-4 lg:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="gsap-reveal relative border border-white/12 bg-black/20 p-6">
                <span className="text-xs uppercase tracking-[0.28em] text-[#c8a96a]">
                  0{index + 1}
                </span>
                <h3 className="mt-10 font-display text-3xl font-semibold text-[#fff6e8]">{step}</h3>
                <p className="mt-4 text-sm leading-6 text-[#ada396]">
                  Clear decisions, documented details and premium supervision at every stage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Immersive Gallery"
            title="Luxury visual direction for every room"
          />
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-[260px_260px]">
            {projects.slice(0, 5).map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveProject(project)}
                className={`group relative overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#f2eadf] py-24 text-[#15120e] md:py-32">
        <div className="luxury-container">
          <SectionIntro
            eyebrow="Client Stories"
            title="Proof that premium execution changes everything"
            copy="Video-style client cards designed for paid traffic trust. Replace previews with real testimonial reels when available."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className="group relative min-h-[420px] overflow-hidden bg-[#15120e] text-white">
                <Image
                  src={projects[index].image}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute left-6 top-6 grid size-14 place-items-center rounded-full bg-[#eadcc4] text-[#15120e]">
                  <Play size={20} fill="currentColor" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c8a96a]">{testimonial.budget}</p>
                  <h3 className="font-display text-3xl font-semibold">{testimonial.name}</h3>
                  <p className="mt-3 leading-7 text-[#eadcc4]">{testimonial.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=84"
            alt="Luxury consultation lounge"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[#080706]/78" />
        </div>
        <div className="luxury-container relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="sticky top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#c8a96a]">Book Now</p>
            <h2 className="font-display text-5xl font-semibold leading-none text-[#fff6e8] md:text-7xl">
              Your Dream Space Starts Here
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d4c8b9]">
              Book a free consultation with our interior experts today. Limited consultation slots available this month.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={WHATSAPP_URL} className="flex items-center justify-center gap-3 bg-[#23c45e] px-5 py-4 font-semibold text-white">
                <MessageCircle size={19} /> WhatsApp
              </a>
              <a href="tel:+919821545511" className="flex items-center justify-center gap-3 border border-white/18 bg-white/8 px-5 py-4 font-semibold text-[#fff7eb]">
                <Phone size={19} /> Click to Call
              </a>
            </div>
          </div>
          <form onSubmit={handleLeadSubmit} className="glass grid gap-4 p-5 md:grid-cols-2 md:p-8">
            {[
              ["Name", "text"],
              ["Phone", "tel"],
              ["Email", "email"],
              ["City", "text"]
            ].map(([label, type]) => (
              <label key={label} className="grid gap-2 text-sm text-[#d8cebf]">
                {label}
                <input
                  required={label === "Name" || label === "Phone"}
                  type={type}
                  name={label.toLowerCase()}
                  placeholder={label}
                  className="border border-white/12 bg-black/35 px-4 py-4 text-[#fff7eb] outline-none transition placeholder:text-[#786f64] focus:border-[#c8a96a]"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-[#d8cebf]">
              Project Type
              <select name="projectType" className="border border-white/12 bg-black/35 px-4 py-4 text-[#fff7eb] outline-none focus:border-[#c8a96a]">
                <option>Luxury Home Interiors</option>
                <option>Villa Interiors</option>
                <option>Modular Kitchen</option>
                <option>Premium Apartment Interiors</option>
                <option>Bedroom, Wardrobe & TV Unit</option>
                <option>Full Home Turnkey Solution</option>
                <option>Turnkey Renovation</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-[#d8cebf]">
              Budget
              <select name="budget" className="border border-white/12 bg-black/35 px-4 py-4 text-[#fff7eb] outline-none focus:border-[#c8a96a]">
                <option>Rs 5L - Rs 15L</option>
                <option>Rs 15L - Rs 35L</option>
                <option>Rs 35L - Rs 75L</option>
                <option>Rs 75L - Rs 1Cr+</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-[#d8cebf] md:col-span-2">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your property, timeline and preferred style."
                className="resize-none border border-white/12 bg-black/35 px-4 py-4 text-[#fff7eb] outline-none transition placeholder:text-[#786f64] focus:border-[#c8a96a]"
              />
            </label>
            <div className="grid gap-3 md:col-span-2 md:grid-cols-[1fr_auto] md:items-center">
              <p className="flex items-center gap-2 text-sm text-[#bdb3a7]">
                <Clock size={16} className="text-[#c8a96a]" /> Response usually within 15 minutes during business hours.
              </p>
              <button
                disabled={formStatus === "submitting"}
                className="inline-flex items-center justify-center gap-3 bg-[#eadcc4] px-7 py-4 font-semibold text-[#11100e] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formStatus === "submitting" ? "Sending..." : "Schedule Consultation"} <ArrowRight size={18} />
              </button>
            </div>
            {formStatus === "success" ? (
              <p className="border border-[#23c45e]/35 bg-[#23c45e]/10 px-4 py-3 text-sm text-[#bff2cf] md:col-span-2">
                Thank you. Your consultation request has been sent. Our team will contact you shortly.
              </p>
            ) : null}
            {formStatus === "error" ? (
              <p className="border border-red-400/35 bg-red-500/10 px-4 py-3 text-sm text-red-100 md:col-span-2">
                Something went wrong. Please try again or message us on WhatsApp.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section id="contact" className="border-t hairline bg-[#0b0a09] py-24 md:py-32">
        <div className="luxury-container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#c8a96a]">Contact</p>
            <h2 className="font-display text-5xl font-semibold leading-none text-[#fff6e8] md:text-7xl">
              Visit the studio or start on WhatsApp
            </h2>
            <div className="mt-10 grid gap-4">
              {[
                [Phone, "+91 9821545511", "tel:+919821545511"],
                [MessageCircle, "WhatsApp Consultation", WHATSAPP_URL],
                [MapPin, "A-123, Sector 63, Noida, Uttar Pradesh - 201301", MAPS_URL]
              ].map(([Icon, text, href]) => (
                <a key={text as string} href={href as string} className="glass flex items-center gap-4 p-5">
                  <Icon className="text-[#c8a96a]" size={23} />
                  <span className="text-[#efe4d3]">{text as string}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="min-h-[430px] overflow-hidden border border-white/12 bg-[#15120e]">
            <iframe
              title="Decoory Interiors location map"
              src="https://www.google.com/maps?q=Decoory+Interiors&output=embed"
              className="h-full min-h-[430px] w-full border-0 grayscale invert-[.9] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#070605] pb-28 pt-14 lg:pb-10">
        <div className="luxury-container">
          <div className="grid gap-10 border-b hairline pb-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-sm leading-7 text-[#a89e92]">
                Luxury home interiors, timeless experiences and end-to-end execution for premium apartments, villas and modern Indian homes.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  [Instagram, "https://www.instagram.com/decoory_interiors/"],
                  [Facebook, "https://www.facebook.com/DecooryInteriors/"],
                  [Youtube, "https://www.youtube.com/@decooryinteriors"],
                  [Award, MAPS_URL]
                ].map(([Icon, href], index) => (
                  <a
                    key={index}
                    href={href as string}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Social profile"
                    className="grid size-10 place-items-center border border-white/12 text-[#eadcc4]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-[#fff6e8]">Quick Links</h3>
              <div className="grid gap-3 text-sm text-[#a89e92]">
                {navItems.map((item) => (
                  <a key={item} href={`#${slug(item)}`} className="hover:text-[#eadcc4]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-[#fff6e8]">Services</h3>
              <div className="grid gap-3 text-sm text-[#a89e92]">
                {services.slice(0, 5).map(([title]) => (
                  <a key={title as string} href="#services" className="hover:text-[#eadcc4]">
                    {title as string}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-[#fff6e8]">Instagram Preview</h3>
              <div className="grid grid-cols-3 gap-2">
                {projects.slice(0, 6).map((project) => (
                  <div key={project.title} className="relative aspect-square overflow-hidden">
                    <Image src={project.image} alt={project.title} fill sizes="90px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-sm text-[#81786e] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Decoory Interiors. All rights reserved.</p>
            <p>Brand direction: matte black, champagne gold, editorial serif typography, cinematic warm imagery.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 lg:hidden">
        <a href="tel:+919821545511" className="flex items-center justify-center gap-2 bg-[#eadcc4] px-4 py-4 text-sm font-semibold text-[#11100e]">
          <Phone size={17} /> Call Now
        </a>
        <a href={WHATSAPP_URL} className="flex items-center justify-center gap-2 bg-[#23c45e] px-4 py-4 text-sm font-semibold text-white">
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
      <a
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 z-50 hidden size-14 place-items-center rounded-full bg-[#23c45e] text-white shadow-2xl lg:grid"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <a
        href="#consultation"
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 border border-[#c8a96a]/45 bg-[#080706]/75 px-3 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#eadcc4] [writing-mode:vertical-rl] backdrop-blur-xl lg:block"
      >
        Get Quote
      </a>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4"
            onClick={() => setActiveProject(null)}
          >
            <button
              className="absolute right-5 top-5 grid size-11 place-items-center border border-white/20 text-white"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>
            <motion.div
              layoutId={activeProject.title}
              className="relative h-[82vh] w-full max-w-6xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent p-8">
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#c8a96a]">
                  {activeProject.category}
                </p>
                <h3 className="font-display text-5xl font-semibold text-[#fff7eb]">
                  {activeProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <script
  dangerouslySetInnerHTML={{
    __html: `
      (function(){
        if(!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...arguments) => {
            if(!window.chatbase.q) {
              window.chatbase.q = []
            }
            window.chatbase.q.push(arguments)
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if(prop === "q") {
                return target.q
              }
              return (...args) => target(prop, ...args)
            }
          })
        }

        const onLoad = function() {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "fiMPXPWplO6lHE7fYEsPI";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);
        };

        if(document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    `,
  }}
/>
    </main>
  );
}
