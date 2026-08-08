"use client";

import { motion } from "framer-motion";
import { principalData } from "@/data/principal";


export default function PrincipalContent() {

  return (

    <motion.div

      initial={{
        opacity:0,
        x:60
      }}

      whileInView={{
        opacity:1,
        x:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.8
      }}

    >


      <span

      className="
      inline-flex

      rounded-full

      bg-blue-100

      px-4
      py-2

      text-xs
      sm:text-sm

      font-bold

      tracking-wide

      text-blue-700

      "

      >

        {principalData.badge}

      </span>





      <h2

      className="
      mt-5

      text-3xl

      sm:text-4xl

      lg:text-5xl

      font-black

      leading-tight

      text-slate-900

      "

      >

        {principalData.title}

      </h2>





      <blockquote

      className="
      mt-6

      border-l-4

      border-blue-600

      pl-4
      sm:pl-6


      text-lg

      sm:text-xl

      lg:text-2xl


      italic

      font-semibold

      leading-relaxed

      text-blue-700

      "

      >

        "{principalData.quote}"

      </blockquote>





      <p

      className="
      mt-6

      sm:mt-8

      text-base

      sm:text-lg


      font-medium

      leading-7

      sm:leading-9


      text-slate-700

      "

      >

        {principalData.message}

      </p>





      <div

      className="
      mt-8

      "

      >

        <h4

        className="
        text-xl

        sm:text-2xl

        font-extrabold

        text-slate-900

        "

        >

          {principalData.principal}

        </h4>


        <p

        className="
        mt-1

        font-semibold

        text-blue-600

        "

        >

          {principalData.designation}

        </p>


      </div>



    </motion.div>

  );
}