import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "../site-config";

export default function MobileCta() {
  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 lg:hidden">
        <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 bg-[#eadcc4] px-4 py-4 text-sm font-semibold text-[#11100e]">
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
    </>
  );
}
