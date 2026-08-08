"use client";

import { motion } from "framer-motion";

interface Props {
  icon: any;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-blue-600 hover:shadow-2xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
        <Icon
          size={34}
          className="text-blue-600 transition group-hover:text-white"
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}