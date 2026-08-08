"use client";

import { navigation } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="group relative text-[15px] font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700"
        >
          {item.title}

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}

      <a
        href="#contact"
        className="
          rounded-full
          bg-gradient-to-r
          from-blue-700
          to-indigo-700
          px-7
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-xl
        "
      >
        Enquiry Now
      </a>
    </div>
  );
}