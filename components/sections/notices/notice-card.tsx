"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

import { notices } from "@/data/notices";

export default function NoticeCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {notices.map((notice, index) => {
        const Icon = notice.icon;

        return (
          <motion.div
            key={notice.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              transition-all
              duration-300
              hover:border-blue-200
              hover:shadow-2xl
            "
          >
            {/* Top Gradient */}

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            {/* NEW Badge */}

            {notice.isNew && (
              <span
                className="
                absolute
                right-5
                top-5
                rounded-full
                bg-red-500
                px-3
                py-1
                text-xs
                font-bold
                text-white
              "
              >
                NEW
              </span>
            )}

            {/* Icon */}

            <div
              className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-blue-700
            "
            >
              <Icon size={30} />
            </div>

            {/* Category */}

            <span
              className="
              inline-block
              rounded-full
              bg-blue-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-blue-700
            "
            >
              {notice.category}
            </span>

            {/* Title */}

            <h3
              className="
              mt-5
              text-2xl
              font-black
              leading-snug
              text-slate-900
            "
            >
              {notice.title}
            </h3>

            {/* Description */}

            <p
              className="
              mt-4
              text-base
              font-medium
              leading-7
              text-slate-600
            "
            >
              {notice.description}
            </p>

            {/* Bottom */}

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-500">
                <CalendarDays size={18} />

                <span className="text-sm font-semibold">
                  {notice.date}
                </span>
              </div>

              {/* <button
                className="
                flex
                items-center
                gap-2
                font-bold
                text-blue-700
                transition
                group-hover:gap-3
              "
              >
                Read More

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button> */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}