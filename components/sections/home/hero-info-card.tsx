"use client";

import { motion } from "framer-motion";
import {
  Star,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

export default function HeroInfoCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: .5,
      }}
      className="
      w-[380px]
      rounded-[35px]
      border
      border-white/20
      bg-white/10
      p-8
      backdrop-blur-2xl
      shadow-[0_20px_80px_rgba(0,0,0,.35)]
      "
    >
      {/* Stars */}

      <div className="flex items-center gap-2">

        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="currentColor"
              size={18}
            />
          ))}
        </div>

        <span className="text-white">
          Parent Trust
        </span>

      </div>

      {/* Title */}

      <h3 className="mt-6 text-5xl font-black leading-tight text-white">

        Future Ready

        <span className="block text-yellow-400">

          Education

        </span>

      </h3>

      {/* Description */}

      <p className="mt-5 text-lg leading-8 text-slate-200">

        Playgroup to Higher Secondary Science
        with technology integrated learning.

      </p>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <Card
          icon={<GraduationCap size={28} />}
          value="15+"
          title="Years"
        />

        <Card
          icon={<Users size={28} />}
          value="1K+"
          title="Students"
        />

        <Card
          icon={<Award size={28} />}
          value="A+"
          title="Quality"
        />

      </div>
    </motion.div>
  );
}

function Card({
  icon,
  value,
  title,
}: any) {
  return (
    <div
      className="
      rounded-2xl
      bg-white/10
      p-5
      text-center
      backdrop-blur-xl
      "
    >
      <div className="flex justify-center text-yellow-400">

        {icon}

      </div>

      <h4 className="mt-3 text-4xl font-black text-white">

        {value}

      </h4>

      <p className="mt-1 text-sm text-slate-300">

        {title}

      </p>

    </div>
  );
}