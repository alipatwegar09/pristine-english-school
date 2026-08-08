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
      transition={{ duration: 0.6 }}
      className={`relative flex w-full ${
        left ? "justify-start" : "justify-end"
      }`}
    >
      <div className="w-full lg:w-[45%] rounded-3xl bg-white p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition">
        <span className="text-sm font-bold text-blue-600 uppercase">
          {year}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}