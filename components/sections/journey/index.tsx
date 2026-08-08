import Timeline from "./timeline";

export default function Journey() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            From a Humble Beginning to Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
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