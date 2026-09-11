import FacilitiesGrid from "./facilities-grid";

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="
        overflow-hidden
        bg-lime-50
        py-16
        md:py-24
        lg:py-32
      "
    >
      <div
        className="
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
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our Facilities
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              font-medium
              text-slate-700
              sm:text-lg
            "
          >
            Creating a safe, modern and inspiring
            environment for every learner.
          </p>
        </div>

        <FacilitiesGrid />
      </div>
    </section>
  );
}