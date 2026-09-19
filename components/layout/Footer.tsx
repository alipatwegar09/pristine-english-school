"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowRight
} from "lucide-react";
import { schoolData } from "@/data/school";
import { FaInstagram, FaYoutube } from "react-icons/fa";
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Facilities", href: "#facilities" },
  { name: "Events", href: "#events" },
  { name: "Notices", href: "#notices" },
  { name: "Contact", href: "#contact" },
];

const academicLinks = [
  "Pre-Primary",
  "Primary",
  "Secondary",
  "Higher Secondary Science",
];

export default function Footer() {
  return (
    <footer className="bg-[#071b33] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* School Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-1 shadow-md">
                <Image
                  src={schoolData.logo}
                  alt={schoolData.name}
                  width={55}
                  height={55}
                  className="rounded-xl"
                />
              </div>

              <div>
                <h3
                  className="
                    font-[var(--font-fredoka)]
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  Pristine
                </h3>

                <p
                  className="
                    mt-0.5
                    font-[var(--font-nunito)]
                    text-[11px]
                    font-extrabold
                    tracking-[0.18em]
                    text-lime-300
                  "
                >
                  ENGLISH SCHOOL
                </p>
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-sm
                font-[var(--font-nunito)]
                text-sm
                font-medium
                leading-7
                text-slate-300
              "
            >
              {schoolData.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="
                mb-5
                font-[var(--font-fredoka)]
                text-xl
                font-medium
                text-white
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      font-[var(--font-nunito)]
                      text-sm
                      font-bold
                      text-slate-300
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-lime-300
                    "
                  >
                    <span className="mr-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      •
                    </span>

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4
              className="
                mb-5
                font-[var(--font-fredoka)]
                text-xl
                font-medium
                text-white
              "
            >
              Academics
            </h4>

            <ul className="space-y-3">
              {academicLinks.map((item) => (
                <li
                  key={item}
                  className="
                    font-[var(--font-nunito)]
                    text-sm
                    font-bold
                    text-slate-300
                    transition-colors
                    duration-300
                    hover:text-lime-300
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="
                mb-5
                font-[var(--font-fredoka)]
                text-xl
                font-medium
                text-white
              "
            >
              Contact Us
            </h4>

            <div
              className="
                space-y-4
                font-[var(--font-nunito)]
                text-sm
                font-semibold
                text-slate-300
              "
            >
              <p className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-lime-300"
                />
                <span>{schoolData.location}</span>
              </p>

              <p className="flex gap-3">
                <Mail
                  size={20}
                  className="mt-0.5 shrink-0 text-lime-300"
                />
                <span>{schoolData.email}</span>
              </p>
            </div>
<div className="flex flex-col gap-3 pt-2">
  <Link
    href="https://www.instagram.com/pristine_english_school_miraj/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex items-center gap-3 font-[var(--font-nunito)] text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-lime-300"
  >
    <FaInstagram size={20} className="shrink-0 text-lime-300" />
    <span>Instagram</span>
  </Link>

  <Link
    href="https://www.youtube.com/@pristineenglishschoolmiraj837"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="flex items-center gap-3 font-[var(--font-nunito)] text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-lime-300"
  >
    <FaYoutube size={20} className="shrink-0 text-lime-300" />
    <span>YouTube</span>
  </Link>
</div>
            {/* Apply Button */}
            <Link
              href="#contact"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-lime-400
                px-6
                py-3
                font-[var(--font-nunito)]
                text-sm
                font-extrabold
                text-[#092b52]
                shadow-lg
                shadow-lime-900/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-lime-300
                hover:shadow-xl
              "
            >
              Apply Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/10
            pt-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p
            className="
              font-[var(--font-nunito)]
              text-xs
              font-semibold
              text-slate-400
            "
          >
            © {new Date().getFullYear()} {schoolData.name}. All Rights Reserved.
          </p>

          <p
            className="
              font-[var(--font-fredoka)]
              text-sm
              font-medium
              text-slate-300
            "
          >
            Learn • Grow • Excel ✨
          </p>
        </div>

      </div>
    </footer>
  );
}