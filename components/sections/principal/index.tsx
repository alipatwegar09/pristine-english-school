import PrincipalContent from "./principal-content";
import PrincipalImage from "./principal-image";

export default function PrincipalSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-sky-50
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-blue-200
          opacity-40
          blur-3xl
          sm:right-0
          sm:top-0
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-5
          sm:gap-14
          sm:px-6
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* Mobile Image First */}
        <div className="order-1 lg:order-1">
          <PrincipalImage />
        </div>

        {/* Principal Content */}
        <div className="order-2 lg:order-2">
          <PrincipalContent />
        </div>
      </div>
    </section>
  );
}