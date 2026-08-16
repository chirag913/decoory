import Image from "next/image";
import Link from "next/link";
import { Award, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";
import { CLIENT_LOGIN_URL, MAPS_URL, STAFF_LOGIN_URL, navItems, socialLinks } from "../site-config";

const locationPages = [
  ["Greater Noida West", "/interior-designer-greater-noida-west"],
  ["Noida Extension", "/interior-designer-noida-extension"],
  ["Greater Noida", "/interior-designer-greater-noida"],
  ["Gaur City", "/interior-designer-gaur-city"],
  ["Gaur City 2", "/interior-designer-gaur-city-2"]
];

const servicePages = [
  ["Modular Kitchen", "/modular-kitchen-greater-noida-west"],
  ["Wardrobe Interior", "/wardrobe-interior-greater-noida-west"],
  ["Turnkey Interior Design", "/turnkey-interior-designer-greater-noida-west"],
  ["False Ceiling", "/false-ceiling-greater-noida-west"],
  ["Home Renovation", "/home-renovation-greater-noida-west"]
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=400&q=70"
];

function slug(label: string) {
  return label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#070605] pb-28 pt-14 lg:pb-10">
      <div className="luxury-container">
        <div className="grid gap-10 border-b hairline pb-10 lg:grid-cols-[1.1fr_.75fr_.8fr_.8fr_.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm leading-7 text-[#a89e92]">
              Luxury home interiors, timeless experiences and end-to-end execution for premium apartments, villas and modern Indian homes.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                [Instagram, socialLinks.instagram],
                [Facebook, socialLinks.facebook],
                [Youtube, socialLinks.youtube],
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
                <a key={item} href={`/#${slug(item)}`} className="hover:text-[#eadcc4]">
                  {item}
                </a>
              ))}
              <Link href="/blog" className="hover:text-[#eadcc4]">
                Blog
              </Link>
              <a href={CLIENT_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#eadcc4]">
                Client Login
              </a>
              <a href={STAFF_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#eadcc4]">
                Staff Login
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 font-semibold text-[#fff6e8]">Areas We Serve</h3>
            <div className="grid gap-3 text-sm text-[#a89e92]">
              {locationPages.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-[#eadcc4]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 font-semibold text-[#fff6e8]">Services</h3>
            <div className="grid gap-3 text-sm text-[#a89e92]">
              {servicePages.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-[#eadcc4]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 font-semibold text-[#fff6e8]">Instagram Preview</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden">
                  <Image src={src} alt="Decoory Interiors project" fill sizes="90px" className="object-cover" />
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
  );
}
