import AboutContent from "./about-content";
import AboutImage from "./about-image";

export default function About() {
  return (
    <section
      id="about"
      className="
        bg-blue-50

        py-12
        sm:py-16
        md:py-24
        lg:py-32

        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-12
          sm:gap-16
          lg:gap-20

          items-center
        "
      >
        {/* Image - first on mobile */}
        <div className="order-1 lg:order-2 w-full">
          <AboutImage />
        </div>

        {/* Content - second on mobile */}
        <div className="order-2 lg:order-1 w-full">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}