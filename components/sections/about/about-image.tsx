"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

export default function AboutImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
        <Image
          src={aboutData.image}
          alt="About Pristine English School"
          width={700}
          height={700}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          className="
            h-[280px]
            w-full
            object-cover
            sm:h-[380px]
            md:h-[480px]
            lg:h-auto
            lg:min-h-[500px]
          "
        />
      </div>

      {/* Experience Badge */}
      <div
        className="
          absolute
          -bottom-4
          left-3

          sm:-bottom-6
          sm:-left-6

          rounded-2xl
          sm:rounded-3xl

          bg-blue-600

          px-4
          py-3

          sm:px-8
          sm:py-6

          text-white
          shadow-xl
        "
      >
        <h3
          className="
            text-2xl
            sm:text-4xl
            font-black
            leading-none
          "
        >
          {aboutData.experience}
        </h3>

        <p
          className="
            mt-1
            text-xs
            sm:text-base
            font-medium
            whitespace-nowrap
          "
        >
          Years of Excellence
        </p>
      </div>
    </motion.div>
  );
}