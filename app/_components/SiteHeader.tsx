"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LogIn, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import {
  CLIENT_LOGIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  STAFF_LOGIN_URL,
  WHATSAPP_URL,
  navItems
} from "../site-config";

function slug(label: string) {
  return label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080706]/55 backdrop-blur-xl">
        <nav className="luxury-container flex h-20 items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${slug(item)}`}
                className="text-sm text-[#d8cebf]/80 transition hover:text-[#f8ecd8]"
              >
                {item}
              </a>
            ))}
            <Link href="/blog" className="text-sm text-[#d8cebf]/80 transition hover:text-[#f8ecd8]">
              Blog
            </Link>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={STAFF_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap text-sm text-[#d8cebf]/60 transition hover:text-[#f8ecd8] xl:block"
            >
              Staff Login
            </a>
            <a
              href={CLIENT_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic flex items-center gap-2 whitespace-nowrap border border-[#c8a96a]/50 px-4 py-3 text-sm text-[#eadcc4]"
            >
              <LogIn size={16} /> Client Login
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="magnetic flex items-center gap-2 whitespace-nowrap border border-white/15 px-4 py-3 text-sm text-[#f4eadc]"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="#consultation"
              className="magnetic flex items-center gap-2 whitespace-nowrap bg-[#eadcc4] px-5 py-3 text-sm font-semibold text-[#12100d]"
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
                  href={`/#${slug(item)}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-[#fff6e8]"
                >
                  {item}
                </a>
              ))}
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="font-display text-4xl text-[#fff6e8]">
                Blog
              </Link>
            </div>
            <div className="mt-12 grid gap-3">
              <a
                href={CLIENT_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#c8a96a]/50 px-5 py-4 text-center font-semibold text-[#eadcc4]"
              >
                <LogIn size={18} /> Client Login
              </a>
              <a href={WHATSAPP_URL} className="bg-[#eadcc4] px-5 py-4 text-center font-semibold text-[#12100d]">
                WhatsApp Now
              </a>
              <a href={`tel:${PHONE_TEL}`} className="border border-white/15 px-5 py-4 text-center text-[#f4eadc]">
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={STAFF_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-center text-sm text-[#d8cebf]/60"
              >
                Staff Login
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
