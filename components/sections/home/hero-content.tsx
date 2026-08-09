"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  PlayCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-30
        max-w-3xl
        font-[var(--font-jakarta)]
      "
    >
      {/* =========================
          ADMISSION BADGE
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          inline-flex
          items-center
          gap-2.5
          rounded-full
          border
          border-white/30
          bg-white/10
          px-4
          py-2
          shadow-lg
          backdrop-blur-xl
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-yellow-400
              opacity-75
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2.5
              w-2.5
              rounded-full
              bg-yellow-400
            "
          />
        </span>

        <span
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-white
            sm:text-xs
          "
        >
          Admissions Open 2026–27
        </span>

        <Sparkles
          size={14}
          className="text-yellow-400"
        />
      </motion.div>

      {/* =========================
          MAIN HEADING
      ========================== */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-7
          max-w-4xl
          text-[clamp(3rem,7vw,6.8rem)]
          font-extrabold
          leading-[0.94]
          tracking-[-0.055em]
          text-white
          drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]
        "
      >
        Empowering
        <br />

        <span className="text-white">
          Young Minds
        </span>

        <br />

        <span className="text-white">
          For{" "}
        </span>

        <span
          className="
            bg-gradient-to-r
            from-yellow-300
            via-yellow-400
            to-amber-300
            bg-clip-text
            text-transparent
          "
        >
          Tomorrow
        </span>
      </motion.h1>

      {/* =========================
          ACCENT LINE
      ========================== */}

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 170, opacity: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.8,
        }}
        className="
          mt-5
          h-[4px]
          rounded-full
          bg-gradient-to-r
          from-yellow-400
          to-transparent
        "
      />

      {/* =========================
          TAGLINE
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.85,
          duration: 0.7,
        }}
        className="mt-5"
      >
        <p
          className="
            text-base
            font-semibold
            tracking-wide
            text-white
            sm:text-lg
          "
        >
          Excellence in{" "}
          <span className="text-yellow-400">
            Education
          </span>
          {" "}•{" "}
          Character
          {" "}•{" "}
          Innovation
        </p>
      </motion.div>

      {/* =========================
          DESCRIPTION
      ========================== */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
        className="
          mt-5
          max-w-2xl
          text-sm
          font-medium
          leading-7
          text-white/85
          sm:text-base
          sm:leading-8
          lg:text-lg
        "
      >
        At{" "}
        <strong className="font-bold text-white">
          Pristine English School
        </strong>
        , we nurture confident, compassionate and
        future-ready learners through quality education,
        innovative teaching, technology-integrated learning
        and strong values.
      </motion.p>

      {/* =========================
          BUTTONS
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.15,
          duration: 0.7,
        }}
        className="
          mt-8
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
        "
      >
        {/* Admission Button */}

        <Link href="#contact">
          <button
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-yellow-400
              px-7
              py-3.5
              text-sm
              font-bold
              text-slate-950
              shadow-[0_10px_35px_rgba(250,204,21,0.3)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-yellow-300
              hover:shadow-[0_15px_45px_rgba(250,204,21,0.4)]
              sm:w-auto
              sm:px-8
              sm:py-4
            "
          >
            <GraduationCap size={19} />

            <span>
              Admission Open
            </span>

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </Link>

        {/* Campus Tour */}

        <button
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/40
            bg-white/10
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/70
            hover:bg-white/20
            sm:w-auto
            sm:px-8
            sm:py-4
          "
        >
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-yellow-400/20
            "
          >
            <PlayCircle
              size={19}
              className="
                text-yellow-400
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </span>

          Watch Campus Tour
        </button>
      </motion.div>
    </motion.div>
  );
}