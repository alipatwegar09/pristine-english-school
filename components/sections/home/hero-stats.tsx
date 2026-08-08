"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserRoundCheck,
  BookOpen,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Happy Students",
  },
  {
    icon: UserRoundCheck,
    value: "60+",
    label: "Qualified Teachers",
  },
  {
    icon: BookOpen,
    value: "Playgroup",
    label: "to 12th Science",
  },
  {
    icon: Trophy,
    value: "State Board",
    label: "Maharashtra",
  },
];

export default function HeroStats() {
  return (
    <div className="absolute bottom-28 left-1/2 z-30 w-full max-w-7xl -translate-x-1/2 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              rounded-3xl
              border
              border-white/20
              bg-white/10
              p-6
              backdrop-blur-2xl
              shadow-xl
              transition-all
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-400
                  text-slate-900
                  "
                >
                  <Icon size={32} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="text-slate-200">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}