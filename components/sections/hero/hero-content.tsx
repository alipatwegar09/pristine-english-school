// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// import { heroData } from "@/data/hero";

// export default function HeroContent() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-white"
//     >
//       <span className="rounded-full border border-blue-400 bg-blue-600/20 px-5 py-2 text-sm font-semibold backdrop-blur-md">
//         {heroData.badge}
//       </span>

//       <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
//         {heroData.title}
//       </h1>

//       <h2 className="mt-4 text-2xl font-semibold text-blue-200 lg:text-3xl">
//         {heroData.subtitle}
//       </h2>

//       <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
//         {heroData.description}
//       </p>

//       {/* <div className="mt-10 flex flex-wrap gap-4">
//         <Link href="/admission">
//           <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
//             Apply Online
//           </button>
//         </Link>

//         <Link href="/about">
//           <button className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900">
//             Explore School
//             <ArrowRight size={18} />
//           </button>
//         </Link>
//       </div> */}
//     </motion.div>
//   );
// }


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
      <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-sm mt-2">
        <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
        {heroData.badge}
      </div>

      {/* Main Heading */}
      <h1
        className="
          mt-6
          font-[var(--font-heading)]
          text-[2.7rem]
          font-extrabold
          leading-[1.05]
          tracking-[-0.03em]
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
        <span className="relative inline-block text-yellow-400">
          Tomorrow
          <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yellow-400/70 sm:-bottom-2" />
        </span>
      </h1>

      {/* Subtitle */}
      {/* <h2
        className="
          mt-5
          max-w-2xl
          font-[var(--font-heading)]
          text-base
          font-semibold
          leading-relaxed
          text-blue-100

          sm:mt-6
          sm:text-xl

          md:text-2xl

          lg:text-[1.65rem]
        "
      >
        Excellence in Education
        <span className="mx-2 text-yellow-400">•</span>
        Character
        <span className="mx-2 text-yellow-400">•</span>
        Innovation
      </h2> */}

      {/* Description */}
      <p
        className="
          mt-5
          max-w-2xl
          font-[var(--font-body)]
          text-sm
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
        <strong className="font-semibold text-white">
          Pristine English School
        </strong>
        , we nurture confident, compassionate and future-ready learners
        through quality education, innovative teaching practices and strong
        moral values from{" "}
        <strong className="font-semibold text-white">
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
    bg-yellow-400
    px-6
    py-3.5
    text-sm
    font-bold
    text-slate-900
    shadow-lg
    shadow-yellow-500/20
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-yellow-300
    hover:shadow-xl
    hover:shadow-yellow-400/30

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
          href="tel:+91 9421182990"
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
            text-sm
            font-semibold
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
            className="transition-transform duration-300 group-hover:rotate-6"
          />

          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
