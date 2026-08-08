import PrincipalContent from "./principal-content";
import PrincipalImage from "./principal-image";


export default function PrincipalSection() {

  return (

    <section

      className="
      relative
      overflow-hidden

      bg-slate-50

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


      sm:right-0

      sm:top-0


      h-64

      w-64


      sm:h-96

      sm:w-96


      rounded-full

      bg-blue-100

      blur-3xl

      opacity-40

      "

      />




      <div

      className="
      relative
      z-10

      mx-auto

      max-w-7xl


      grid

      grid-cols-1


      lg:grid-cols-2


      items-center


      gap-10

      sm:gap-14

      lg:gap-20


      px-5

      sm:px-6

      "

      >



        {/* Mobile Image First */}

        <div

        className="
        order-1

        lg:order-1

        "

        >

          <PrincipalImage />

        </div>




        <div

        className="
        order-2

        lg:order-2

        "

        >

          <PrincipalContent />

        </div>



      </div>



    </section>

  );

}