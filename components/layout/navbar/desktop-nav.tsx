"use client";

import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-7 lg:flex">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="
            group
            relative
            font-[var(--font-nunito)]
            text-[15px]
            font-extrabold
            tracking-wide
            text-slate-700
            transition-all
            duration-300
            hover:text-[#092b52]
          "
        >
          {item.title}

          {/* Playful underline */}
          <span
            className="
              absolute
              -bottom-2
              left-1/2
              h-1
              w-0
              -translate-x-1/2
              rounded-full
              bg-lime-400
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </a>
      ))}

      {/* Enquiry Button */}
      <a
        href="#contact"
        className="
          ml-2
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-[#092b52]
          px-7
          py-3
          font-[var(--font-nunito)]
          text-sm
          font-extrabold
          tracking-wide
          text-white
          shadow-lg
          shadow-blue-900/15
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#063d75]
          hover:shadow-xl
          active:translate-y-0
        "
      >
        Enquiry Now
        <span className="ml-2 text-lime-300">✦</span>
      </a>
    </div>
  );
}