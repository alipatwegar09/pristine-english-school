import EventsGrid from "./events-grid";

export default function Events() {
  return (
    <section
      id="events"
      className="
        bg-amber-50
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
        <div className="mb-12 text-center">
          <h2
            className="
              text-3xl
              font-black
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            School Events
          </h2>

          <p
            className="
              mt-4
              font-medium
              text-slate-700
            "
          >
            Stay connected with our latest activities
            and celebrations.
          </p>
        </div>

        <EventsGrid />
      </div>
    </section>
  );
}