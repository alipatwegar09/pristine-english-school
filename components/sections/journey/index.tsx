import Timeline from "./timeline";

export default function Journey() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFDF8]
        py-20
        md:py-28
        lg:py-32
      "
    >
      {/* Decorative background shapes */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-20
          h-48
          w-48
          rounded-full
          bg-yellow-200/30
          blur-2xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-[40%]
          h-56
          w-56
          rounded-full
          bg-pink-200/30
          blur-2xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          left-[20%]
          h-32
          w-32
          rounded-full
          bg-blue-200/20
          blur-2xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Small label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#FFF3C4]
              px-5
              py-2
              font-[var(--font-nunito)]
              text-xs
              font-extrabold
              tracking-[0.15em]
              text-[#92400E]
              shadow-sm
              sm:text-sm
            "
          >
            <span>✨</span>
            OUR JOURNEY
            <span>🌈</span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              font-[var(--font-fredoka)]
              text-4xl
              font-medium
              leading-tight
              tracking-tight
              text-[#092B52]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Growing,
            <span className="text-[#7C6AE6]"> Learning, </span>
            Together
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-[var(--font-nunito)]
              text-base
              font-medium
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Every year brings new smiles, new discoveries, and new
            opportunities. Take a little walk through the story of
            Pristine English School.
          </p>
        </div>

        {/* Timeline */}
        <Timeline />

        {/* Bottom message */}
        <div className="mt-16 text-center sm:mt-20">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              shadow-sm
              ring-1
              ring-slate-100
            "
          >
            <span className="text-lg">💛</span>

            <span
              className="
                font-[var(--font-nunito)]
                text-sm
                font-bold
                text-slate-600
              "
            >
              And our story continues...
            </span>

            <span className="text-lg">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}