"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import { LEAD_SCRIPT_URL, PHONE_TEL, WHATSAPP_URL } from "../site-config";

export default function ConsultationForm({ source }: { source: string }) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("source", source);
    formData.set("pageUrl", window.location.href);
    formData.set("submittedAt", new Date().toISOString());

    setFormStatus("submitting");

    try {
      await fetch(LEAD_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData as unknown as Record<string, string>)
      });
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div id="consultation" className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
      <div className="lg:sticky lg:top-28">
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
          <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-3 border border-white/18 bg-white/8 px-5 py-4 font-semibold text-[#fff7eb]">
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
  );
}
