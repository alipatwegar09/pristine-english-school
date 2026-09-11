"use client";

import AcademicTimeline from "./academic-timeline";

export default function Academics() {
  return (
    <section
      id="academics"
      className="
        bg-violet-50
        py-16
        md:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-[#092b52]
              sm:text-4xl
              md:text-5xl
            "
          >
            Our Academics
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              font-medium
              leading-relaxed
              text-slate-600
            "
          >
            A structured learning journey designed to nurture
            curiosity, creativity, and academic excellence.
          </p>
        </div>

        <AcademicTimeline />
      </div>
    </section>
  );
}