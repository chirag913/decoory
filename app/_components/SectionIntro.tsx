"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

export default function SectionIntro({
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
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#c8a96a]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-[0.96] text-[#fff6e8] md:text-6xl">{title}</h2>
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#bdb3a7] md:text-lg">{copy}</p>
      ) : null}
    </motion.div>
  );
}
