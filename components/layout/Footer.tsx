"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";

import { schoolData } from "@/data/school";


const quickLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Academics",
    href: "#academics",
  },
  {
    name: "Facilities",
    href: "#facilities",
  },
  {
    name: "Events",
    href: "#events",
  },
   {
    name: "Notices",
    href: "#notices",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


const academicLinks = [
  "Pre-Primary",
  "Primary",
  "Secondary",
  "Higher Secondary Science",
];


export default function Footer() {

  return (

    <footer
      className="
      bg-slate-950
      text-white
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        sm:px-6
        py-14
        md:py-20
        "
      >


        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >


          {/* School Info */}

          <div>


            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <Image
                src={schoolData.logo}
                alt={schoolData.name}
                width={55}
                height={55}
                className="
                rounded-full
                bg-white
                p-1
                "
              />


              <h3
                className="
                text-xl
                font-black
                "
              >
                Pristine
              </h3>


            </div>


            <p
              className="
              mt-5
              text-sm
              leading-7
              text-slate-300
              "
            >
              {schoolData.mission}
            </p>


          </div>




          {/* Quick Links */}

          <div>


            <h4
              className="
              mb-5
              text-lg
              font-black
              "
            >
              Quick Links
            </h4>


            <ul
              className="
              space-y-3
              "
            >

              {
                quickLinks.map((item)=>(

                  <li key={item.name}>

                    <Link
                      href={item.href}
                      className="
                      text-sm
                      font-medium
                      text-slate-300
                      transition
                      hover:text-white
                      "
                    >

                      {item.name}

                    </Link>

                  </li>

                ))
              }

            </ul>


          </div>





          {/* Academics */}

          <div>


            <h4
              className="
              mb-5
              text-lg
              font-black
              "
            >
              Academics
            </h4>


            <ul
              className="
              space-y-3
              "
            >

              {
                academicLinks.map((item)=>(

                  <li
                    key={item}
                    className="
                    text-sm
                    font-medium
                    text-slate-300
                    "
                  >

                    {item}

                  </li>

                ))
              }

            </ul>


          </div>





          {/* Contact */}

          <div>


            <h4
              className="
              mb-5
              text-lg
              font-black
              "
            >
              Contact Us
            </h4>



            <div
              className="
              space-y-4
              text-sm
              text-slate-300
              "
            >


              <p
                className="
                flex
                gap-3
                "
              >

                <MapPin
                  size={20}
                  className="shrink-0 text-blue-400"
                />

                {schoolData.location}

              </p>



              <p
                className="
                flex
                gap-3
                "
              >

                <Mail
                  size={20}
                  className="shrink-0 text-blue-400"
                />

                {schoolData.email}

              </p>


            </div>




            <Link
              href="#contact"
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue-700
              "
            >

              Apply Now

              <ArrowRight size={18}/>

            </Link>



          </div>



        </div>





        {/* Bottom Footer */}


        <div
          className="
          mt-12
          border-t
          border-white/10
          pt-6
          text-center
          text-sm
          text-slate-400
          "
        >

          © {new Date().getFullYear()} {schoolData.name}.
          All Rights Reserved.


        </div>



      </div>


    </footer>

  );

}