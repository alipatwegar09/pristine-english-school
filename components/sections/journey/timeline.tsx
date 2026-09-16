import TimelineCard from "./timeline-card";
import { journeyData } from "@/data/journey";

export default function Timeline() {
  return (
    <div className="relative mt-16 sm:mt-20">

      {/* Playful center timeline */}
      <div
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          -translate-x-1/2
          lg:block
        "
      >
        <div
          className="
            h-full
            w-[3px]
            border-l-[3px]
            border-dashed
            border-[#C4B5FD]
          "
        />
      </div>

      <div className="space-y-10 sm:space-y-14 lg:space-y-20">
        {journeyData.map((item, index) => (
          <TimelineCard
            key={`${item.year}-${index}`}
            {...item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}