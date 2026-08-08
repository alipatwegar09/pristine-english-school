"use client";
import FeatureCard from "./feature-card";
import { whyChooseData } from "@/data/whyChoose";

export default function WhyChoose() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Building Future Leaders Through Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We provide a nurturing environment where students learn, grow,
            explore and excel through academics, technology, sports and
            character building.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseData.map((item) => (
            <FeatureCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}