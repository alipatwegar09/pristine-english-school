"use client";

import AcademicTimeline from "./academic-timeline";

export default function Academics() {
  return (
    <section
      id="academics"
     className="
py-16
md:py-24
bg-white
"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <h2
            className="
           text-3xl
sm:text-4xl
md:text-5xl
            font-extrabold
            tracking-tight
            text-gray-900
            "
          >
            Our Academics
          </h2>


          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-lg
            font-medium
            text-gray-700
            leading-relaxed
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