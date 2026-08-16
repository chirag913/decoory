"use client";

import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { whyDecoory } from "../site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

export default function WhyDecoorySection() {
  return (
    <section id="why-decoory" className="border-y hairline bg-[#0d0c0a] py-16 md:py-20">
      <div className="luxury-container">
        <SectionIntro eyebrow="Why Choose Us" title="Why Decoory Interiors?" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {whyDecoory.map(([stat, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass p-5 text-center md:p-6"
            >
              <p className="font-display text-xl font-semibold text-[#fff6e8] md:text-2xl">{stat}</p>
              <p className="mt-2 text-sm text-[#bdb3a7]">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
