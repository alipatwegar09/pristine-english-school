"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { heroData } from "@/data/hero";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-3xl"
    >
      {/* Badge */}
      <div
        className="
          mt-2
          inline-flex
          items-center
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          font-[var(--font-nunito)]
          text-xs
          font-extrabold
          tracking-wide
          text-white
          shadow-sm
          backdrop-blur-md
          sm:px-5
          sm:py-2.5
          sm:text-sm
        "
      >
        <span
          className="
            mr-2
            h-2
            w-2
            rounded-full
            bg-lime-300
            shadow-[0_0_10px_rgba(163,230,53,0.8)]
          "
        />
        {heroData.badge}
      </div>

      {/* Main Heading */}
      <h1
        className="
          mt-6
          font-[var(--font-fredoka)]
          text-[2.7rem]
          font-semibold
          leading-[1.05]
          tracking-[-0.025em]
          text-white
          sm:mt-7
          sm:text-5xl
          md:text-6xl
          lg:mt-8
          lg:text-7xl
          xl:text-[5rem]
        "
      >
        Empowering
        <br />

        <span className="relative inline-block">
          Young Minds
        </span>

        <br />

        For{" "}
        <span className="relative inline-block text-lime-300">
          Tomorrow

          <span
            className="
              absolute
              -bottom-1
              left-0
              h-1
              w-full
              rounded-full
              bg-lime-300/80
              sm:-bottom-2
            "
          />
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-2xl
          font-[var(--font-nunito)]
          text-sm
          font-medium
          leading-7
          text-slate-200
          sm:mt-6
          sm:text-base
          sm:leading-8
          lg:mt-7
          lg:text-lg
          lg:leading-8
        "
      >
        At{" "}
        <strong className="font-extrabold text-white">
          Pristine English School
        </strong>
        , we nurture confident, compassionate and future-ready learners
        through quality education, innovative teaching practices and strong
        moral values from{" "}
        <strong className="font-extrabold text-white">
          Playgroup to Higher Secondary Science.
        </strong>
      </p>

      {/* CTA Buttons */}
      <div
        className="
          mt-4
          flex
          flex-col
          gap-3
          sm:mt-8
          sm:flex-row
          sm:items-center
        "
      >
        {/* Primary CTA */}
        <a
          href="#contact"
          className="
            group
            relative
            z-30
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-lime-400
            px-6
            py-3.5
            font-[var(--font-nunito)]
            text-sm
            font-extrabold
            text-[#092b52]
            shadow-lg
            shadow-lime-500/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-lime-300
            hover:shadow-xl
            hover:shadow-lime-400/30
            sm:w-auto
            sm:px-7
            sm:py-4
            sm:text-base
          "
        >
          Enquire Now

          <ArrowRight
            size={19}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>

        {/* Secondary CTA */}
        <Link
          href="tel:+919421182990"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/30
            bg-white/10
            px-6
            py-3.5
            font-[var(--font-nunito)]
            text-sm
            font-extrabold
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/50
            hover:bg-white/20
            sm:w-auto
            sm:px-7
            sm:py-4
            sm:text-base
          "
        >
          <PhoneCall
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          />

          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}