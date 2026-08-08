"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, PlayCircle } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-30"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-3 rounded-full border border-yellow-400 bg-yellow-500 px-6 py-3 shadow-xl"
      >
        <GraduationCap className="text-slate-900" size={20} />

        <span className="text-sm font-bold uppercase tracking-wide text-slate-900">
          Admissions Open 2026–27
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
        mt-8
        text-5xl
        font-black
        leading-none
        text-white
        sm:text-6xl
        lg:text-7xl
        xl:text-8xl
        "
      >
        Empowering

        <br />

        Young Minds

        <br />

        For{" "}

        <span className="text-yellow-400">
          Tomorrow
        </span>
      </motion.h1>

      {/* Underline */}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 220 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-4 h-1 rounded-full bg-yellow-400"
      />

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="
        mt-8
        max-w-xl
        text-lg
        leading-9
        text-slate-200
        lg:text-xl
        "
      >
        At <strong>Pristine English School</strong>, we inspire
        young minds through quality education, innovative teaching,
        technology-integrated learning and strong values that prepare
        every child for a brighter future.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        {/* Apply */}

        <Link href="#contact">
          <button
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-yellow-400
            px-8
            py-4
            text-lg
            font-bold
            text-slate-900
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:bg-yellow-300
            "
          >
            <GraduationCap size={22} />

            Admission Open
          </button>
        </Link>

        {/* Video */}

        <button
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border-2
          border-white/50
          bg-white/10
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/20
          "
        >
          <PlayCircle
            size={30}
            className="text-yellow-400"
          />

          Watch Campus Tour
        </button>
      </motion.div>
    </motion.div>
  );
}