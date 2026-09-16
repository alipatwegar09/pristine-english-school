"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const [showMessage, setShowMessage] = useState(true);

  // Replace with school's WhatsApp number
  // Example: 919970871785
  const phoneNumber = "918999527255";

  const message =
    "Hello Pristine English School, I would like to enquire about admissions for 2026-27.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-[100]
        flex
        items-end
        gap-3
        sm:bottom-6
        sm:right-6
      "
    >
      {/* Desktop WhatsApp message */}
      {showMessage && (
        <div
          className="
            relative
            hidden
            w-[250px]
            rounded-2xl
            bg-white
            p-4
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            ring-1
            ring-slate-100
            sm:block
          "
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setShowMessage(false)}
            aria-label="Close WhatsApp message"
            className="
              absolute
              -right-2
              -top-2
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-slate-700
              text-white
              shadow-md
              transition
              hover:bg-slate-900
            "
          >
            <X size={13} />
          </button>

          <p className="text-[11px] font-bold uppercase tracking-wide text-[#25D366]">
            Pristine English School
          </p>

          <p className="mt-1 text-sm font-extrabold text-slate-800">
            Admissions Open 2026–27 🎓
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Have questions about admission? Chat with us on WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pristine English School on WhatsApp"
        className="
          group
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.35)]
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#20BD5A]
          active:scale-95
          sm:h-16
          sm:w-16
        "
      >
        {/* Pulse */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-ping
          "
        />

        {/* Exact WhatsApp-style brand icon */}
        <FaWhatsapp
          className="
            relative
            z-10
            h-8
            w-8
            sm:h-9
            sm:w-9
          "
        />

        {/* Online indicator */}
        <span
          className="
            absolute
            right-0
            top-0
            z-20
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-white
            bg-emerald-500
          "
        />
      </a>
    </div>
  );
}