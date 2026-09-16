"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Props {
  year: string;
  title: string;
  description: string;
  image: string;
  color: string;
  index: number;
}

const colorStyles: Record<
  string,
  {
    card: string;
    badge: string;
    badgeText: string;
    accent: string;
    dot: string;
  }
> = {
  yellow: {
    card: "bg-[#FFF9E8] border-[#FDE68A]",
    badge: "bg-[#FDE68A]",
    badgeText: "text-[#92400E]",
    accent: "bg-[#FBBF24]",
    dot: "bg-[#FBBF24]",
  },

  pink: {
    card: "bg-[#FFF1F7] border-[#FBCFE8]",
    badge: "bg-[#FBCFE8]",
    badgeText: "text-[#9D174D]",
    accent: "bg-[#F472B6]",
    dot: "bg-[#F472B6]",
  },

  blue: {
    card: "bg-[#EEF8FF] border-[#BAE6FD]",
    badge: "bg-[#BAE6FD]",
    badgeText: "text-[#075985]",
    accent: "bg-[#38BDF8]",
    dot: "bg-[#38BDF8]",
  },

  green: {
    card: "bg-[#F0FDF4] border-[#BBF7D0]",
    badge: "bg-[#BBF7D0]",
    badgeText: "text-[#166534]",
    accent: "bg-[#4ADE80]",
    dot: "bg-[#4ADE80]",
  },

  purple: {
    card: "bg-[#F7F3FF] border-[#DDD6FE]",
    badge: "bg-[#DDD6FE]",
    badgeText: "text-[#6D28D9]",
    accent: "bg-[#A78BFA]",
    dot: "bg-[#A78BFA]",
  },
};

export default function TimelineCard({
  year,
  title,
  description,
  image,
  color,
  index,
}: Props) {
  const left = index % 2 === 0;

  const styles = colorStyles[color] || colorStyles.blue;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`
        relative
        flex
        w-full
        ${left ? "lg:justify-start" : "lg:justify-end"}
      `}
    >
      {/* Timeline Dot */}
      <div
        className={`
          absolute
          left-[11px]
          top-8
          z-20
          hidden
          h-5
          w-5
          rounded-full
          border-4
          border-white
          shadow-md
          lg:left-1/2
          lg:flex
          lg:-translate-x-1/2
          ${styles.dot}
        `}
      />

      {/* Card */}
      <div
        className={`
          group
          relative
          w-full
          overflow-hidden
          rounded-[2rem]
          border
          ${styles.card}
          shadow-[0_12px_35px_rgba(15,23,42,0.07)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]
          lg:w-[44%]
        `}
      >
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden sm:h-60">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Soft image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Year Badge */}
          <div
            className={`
              absolute
              left-5
              top-5
              rounded-full
              px-4
              py-2
              shadow-md
              ${styles.badge}
            `}
          >
            <span
              className={`
                font-[var(--font-nunito)]
                text-sm
                font-extrabold
                ${styles.badgeText}
              `}
            >
              {year}
            </span>
          </div>

          {/* Little sparkle */}
          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              rotate-6
              items-center
              justify-center
              rounded-xl
              bg-white/90
              shadow-sm
              backdrop-blur-sm
              transition-transform
              duration-300
              group-hover:rotate-12
            "
          >
            <Sparkles
              size={17}
              className={styles.badgeText}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <h3
            className="
              font-[var(--font-fredoka)]
              text-2xl
              font-medium
              leading-tight
              tracking-tight
              text-[#092B52]
              sm:text-3xl
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              font-[var(--font-nunito)]
              text-sm
              font-medium
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            {description}
          </p>

          {/* Bottom accent */}
          <div className="mt-5 flex items-center gap-2">
            <div
              className={`
                h-2
                w-8
                rounded-full
                ${styles.accent}
                transition-all
                duration-300
                group-hover:w-14
              `}
            />

            <div
              className={`
                h-2
                w-2
                rounded-full
                ${styles.accent}
              `}
            />

            <div
              className={`
                h-2
                w-2
                rounded-full
                ${styles.accent}
                opacity-50
              `}
            />
          </div>
        </div>

        {/* Decorative corner */}
        <div
          className={`
            absolute
            -bottom-8
            -right-8
            h-24
            w-24
            rounded-full
            ${styles.accent}
            opacity-10
          `}
        />
      </div>
    </motion.div>
  );
}