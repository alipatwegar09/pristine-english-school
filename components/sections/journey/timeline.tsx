import TimelineCard from "./timeline-card";
import { journeyData } from "@/data/journey";

export default function Timeline() {
  return (
    <div className="relative mt-20">

      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded bg-blue-100 lg:block" />

      <div className="space-y-12">
        {journeyData.map((item, index) => (
          <TimelineCard
            key={index}
            {...item}
            index={index}
          />
        ))}
      </div>

    </div>
  );
}