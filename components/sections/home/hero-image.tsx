"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroInfoCard from "./hero-info-card";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative hidden min-h-[700px] lg:block"
    >
      {/* Students */}

      {/* <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-0 z-20 w-full"
      >
        <Image
          src="/images/hero/hero.jpeg"
          alt="Students"
          width={850}
          height={850}
          priority
          className="mx-auto object-contain drop-shadow-[0_35px_40px_rgba(0,0,0,.45)]"
        />
      </motion.div> */}

      {/* Card */}

      <div className="absolute right-0 top-20 z-30">
        <HeroInfoCard />
      </div>

      {/* Gold Glow */}

      <div className="absolute right-5 top-24 h-[420px] w-[420px] rounded-full border-4 border-yellow-400/60" />

      {/* Blue Glow */}

      <div className="absolute right-20 top-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[90px]" />

      {/* Decorative Dots */}

      <div className="absolute bottom-24 right-0 grid grid-cols-5 gap-2 opacity-40">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>
    </motion.div>
  );
}