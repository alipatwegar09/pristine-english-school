import { CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/about";

export default function AboutContent() {
  return (
    <div className="w-full">
      {/* Badge */}
      <span
        className="
          inline-flex
          max-w-full
          rounded-full

          bg-blue-100

          px-3
          py-1.5

          sm:px-4
          sm:py-2

          text-xs
          sm:text-sm

          font-bold
          tracking-wide

          text-blue-700
        "
      >
        {aboutData.badge}
      </span>

      {/* Heading */}
      <h2
        className="
          mt-4
          sm:mt-5

          text-[clamp(1.8rem,7vw,3rem)]
          lg:text-5xl

          font-black
          leading-[1.1]

          text-slate-900

          max-w-2xl
        "
      >
        {aboutData.title}
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          sm:mt-6

          text-sm
          sm:text-base
          lg:text-lg

          leading-6
          sm:leading-7
          lg:leading-8

          font-medium

          text-slate-700

          max-w-2xl
        "
      >
        {aboutData.description}
      </p>

      {/* Features */}
      <div
        className="
          mt-6
          sm:mt-8

          grid
          gap-3
          sm:gap-4
        "
      >
        {aboutData.features.map((item) => (
          <div
            key={item}
            className="
              flex
              items-start
              gap-2.5
              sm:gap-3
            "
          >
            <CheckCircle2
              size={21}
              strokeWidth={2.5}
              className="
                mt-0.5
                flex-shrink-0
                text-blue-700
                sm:w-[23px]
                sm:h-[23px]
              "
            />

            <span
              className="
                text-sm
                sm:text-base

                leading-5
                sm:leading-6

                font-semibold

                text-slate-800
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}