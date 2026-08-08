"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <div
      className="
      absolute
      bottom-10
      left-1/2
      z-40
      -translate-x-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="flex flex-col items-center"
      >
        <div
          className="
          flex
          h-14
          w-8
          justify-center
          rounded-full
          border-2
          border-blue-900
          "
        >
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
            mt-2
            h-3
            w-3
            rounded-full
            bg-blue-900
            "
          />
        </div>

        <p className="mt-4 text-sm font-semibold text-blue-900">
          Scroll Down
        </p>
      </motion.div>
    </div>
  );
}