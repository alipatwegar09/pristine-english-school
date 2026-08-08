"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "home");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-gray-200 bg-white p-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <Menu className="h-6 w-6 text-gray-800" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-blue-50 to-indigo-100">

          {/* Header */}
          <div className="flex h-20 items-center justify-between border-b border-white/30 bg-white/70 px-6 backdrop-blur-xl">

            <div>
              <h2 className="text-lg font-bold text-blue-700">
                Pristine
              </h2>
              <p className="text-xs text-gray-500">
                English School
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-red-50"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation */}
         {/* Navigation */}
<div className="flex h-[calc(100vh-80px)] flex-col justify-center bg-white px-6">

  <div className="space-y-2">

    {navigation.map((item) => {
      const section = item.href.replace("#", "");

      return (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`block rounded-lg px-5 py-4 text-lg font-semibold transition-colors duration-200 ${
            activeSection === section
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          {item.title}
        </a>
      );
    })}

  </div>

  {/* CTA */}
  <a
    href="#contact"
    onClick={() => setOpen(false)}
    className="mt-8 rounded-lg bg-blue-700 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-blue-800"
  >
    Enquiry Now
  </a>

</div>
        </div>
      )}
    </div>
  );
}