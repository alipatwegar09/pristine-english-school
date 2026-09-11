import AchievementsGrid from "./acheivements-grid";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        relative
        overflow-hidden
        bg-blue-50
        py-16
        md:py-24
        lg:py-32
      "
    >
      {/* Decorative Circle */}
      <div
        className="
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-200/40
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
        "
      >
        {/* Section Heading */}
        <div
          className="
            mb-12
            text-center
            md:mb-16
          "
        >
          <h2
            className="
              text-3xl
              font-black
              text-[#092b52]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our Achievements
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              font-medium
              text-slate-600
              sm:text-lg
            "
          >
            Milestones that reflect our commitment
            towards excellence and growth.
          </p>
        </div>

        <AchievementsGrid />
      </div>
    </section>
  );
}