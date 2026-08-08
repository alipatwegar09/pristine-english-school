import AboutContent from "./about-content";
import AboutImage from "./about-image";


export default function About() {

  return (

    <section
      id="about"
      className="
      bg-white
      py-16
      md:py-24
      lg:py-32
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-6

        grid
        grid-cols-1

        lg:grid-cols-2

        gap-12
        lg:gap-20

        items-center
        "
      >


        {/* Mobile image first */}

        <div className="order-1 lg:order-2">

          <AboutImage />

        </div>


        <div className="order-2 lg:order-1">

          <AboutContent />

        </div>


      </div>

    </section>

  );
}