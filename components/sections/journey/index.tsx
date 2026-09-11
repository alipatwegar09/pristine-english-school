import Timeline from "./timeline";

export default function Journey() {
  return (
    <section
      className="
        overflow-hidden
        bg-blue-50
        py-20
        md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            OUR JOURNEY
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-[#092b52]
              lg:text-5xl
            "
          >
            From a Humble Beginning to Excellence
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Every milestone reflects our commitment to quality education,
            perseverance, and the trust of parents who have been part of this
            remarkable journey.
          </p>
        </div>

        <Timeline />
      </div>
    </section>
  );
}