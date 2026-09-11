"use client";

import { motion } from "framer-motion";

interface Props {
  year: string;
  title: string;
  description: string;
  index: number;
}

export default function TimelineCard({
  year,
  title,
  description,
  index,
}: Props) {
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`relative flex w-full ${
        left ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className="
          group
          w-full
          rounded-3xl
          border
          border-blue-100
          bg-white
          p-6
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-blue-200
          hover:shadow-xl
          sm:p-7
          lg:w-[45%]
          lg:p-8
        "
      >
        {/* Year */}
        <span
          className="
            inline-flex
            rounded-full
            bg-blue-100
            px-3
            py-1
            font-[var(--font-nunito)]
            text-xs
            font-extrabold
            uppercase
            tracking-wider
            text-blue-700
            transition-colors
            duration-300
            group-hover:bg-lime-100
            group-hover:text-lime-700
          "
        >
          {year}
        </span>

        {/* Title */}
        <h3
          className="
            mt-4
            font-[var(--font-fredoka)]
            text-2xl
            font-medium
            leading-tight
            tracking-tight
            text-[#092b52]
            transition-colors
            duration-300
            group-hover:text-blue-700
            sm:text-3xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            font-[var(--font-nunito)]
            text-sm
            font-medium
            leading-7
            text-slate-600
            sm:text-base
            sm:leading-7
          "
        >
          {description}
        </p>

        {/* Decorative accent */}
        <div
          className="
            mt-6
            h-1
            w-10
            rounded-full
            bg-lime-400
            transition-all
            duration-300
            group-hover:w-16
          "
        />
      </div>
    </motion.div>
  );
}