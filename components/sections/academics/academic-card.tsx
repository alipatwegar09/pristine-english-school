"use client";

import { motion } from "framer-motion";


export default function AcademicCard({
  item
}: any) {

  const Icon = item.icon;


  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      whileHover={{
        y:-10
      }}

      className={`
        rounded-3xl
        p-8
        bg-gradient-to-br
        ${item.gradient}
        border
        border-gray-100
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      `}

    >


      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-white
        flex
        items-center
        justify-center
        shadow-md
        mb-6
        "
      >

        <Icon
          size={38}
          strokeWidth={2.3}
          className="text-blue-700"
        />

      </div>



      <h3
        className="
        text-xl
        font-extrabold
        text-gray-900
        mb-4
        "
      >
        {item.title}
      </h3>



      <p
        className="
        text-[15px]
        font-medium
        text-gray-700
        leading-7
        "
      >
        {item.description}
      </p>


    </motion.div>

  );
}