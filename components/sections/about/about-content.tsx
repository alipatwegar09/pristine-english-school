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
          items-center
          rounded-full
          border
          border-lime-200
          bg-lime-50
          px-3
          py-1.5
          font-[var(--font-nunito)]
          text-xs
          font-extrabold
          tracking-wide
          text-lime-700
          sm:px-4
          sm:py-2
          sm:text-sm
        "
      >
        {aboutData.badge}
      </span>

      {/* Heading */}
      <h2
        className="
          mt-4
          max-w-2xl
          font-[var(--font-fredoka)]
          text-[clamp(1.9rem,7vw,3.2rem)]
          font-semibold
          leading-[1.08]
          tracking-[-0.02em]
          text-[#092b52]
          sm:mt-5
          lg:text-5xl
        "
      >
        {aboutData.title}
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-2xl
          font-[var(--font-nunito)]
          text-sm
          font-medium
          leading-6
          text-slate-600
          sm:mt-6
          sm:text-base
          sm:leading-7
          lg:text-lg
          lg:leading-8
        "
      >
        {aboutData.description}
      </p>

      {/* Features */}
      <div
        className="
          mt-6
          grid
          gap-3
          sm:mt-8
          sm:gap-4
        "
      >
        {aboutData.features.map((item) => (
          <div
            key={item}
            className="
              group
              flex
              items-start
              gap-2.5
              sm:gap-3
            "
          >
            {/* Check Icon */}
            <div
              className="
                mt-0.5
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-lime-100
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-lime-200
              "
            >
              <CheckCircle2
                size={18}
                strokeWidth={2.5}
                className="text-lime-700"
              />
            </div>

            {/* Feature Text */}
            <span
              className="
                pt-0.5
                font-[var(--font-nunito)]
                text-sm
                font-bold
                leading-5
                text-slate-700
                transition-colors
                duration-300
                group-hover:text-[#092b52]
                sm:text-base
                sm:leading-6
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