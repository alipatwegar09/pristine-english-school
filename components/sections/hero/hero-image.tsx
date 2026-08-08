"use client";

import { motion } from "framer-motion";
import {
  Star,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";


export default function HeroImage() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.8
      }}

      className="
      flex
      justify-center

      mt-10

      lg:mt-0
      "

    >


      <div

      className="
      w-full

      max-w-sm

      sm:max-w-md

      rounded-3xl

      border

      border-white/20

      bg-white/10

      p-5

      sm:p-8

      backdrop-blur-xl

      shadow-2xl

      "

      >



        {/* Stars */}

        <div
        className="
        flex
        items-center
        gap-1
        "
        >

        {[1,2,3,4,5].map((i)=>(

          <Star
          key={i}
          size={18}
          fill="currentColor"
          className="text-yellow-400"
          />

        ))}

        <span
        className="
        ml-2
        text-xs
        sm:text-sm
        font-semibold
        text-white
        "
        >
          Parent Trust
        </span>


        </div>




        <h3

        className="
        mt-5

        text-3xl

        sm:text-4xl

        font-black

        leading-tight

        text-white

        "

        >

        Future Ready
        <span
        className="
        block
        text-yellow-300
        "
        >
        Education
        </span>

        </h3>




        <p

        className="
        mt-3

        text-sm

        sm:text-base

        leading-6

        text-white/80

        "

        >

        Playgroup to Higher Secondary Science
        with technology integrated learning.

        </p>





        {/* Stats */}

        <div

        className="
        mt-6

        grid

        grid-cols-3

        gap-2

        sm:gap-4

        "

        >


          <Stat
          icon={<GraduationCap size={22}/>}
          value="10+"
          label="Years"
          />


          <Stat
          icon={<Users size={22}/>}
          value="1K+"
          label="Students"
          />


          <Stat
          icon={<Award size={22}/>}
          value="A+"
          label="Quality"
          />


        </div>



      </div>


    </motion.div>

  );
}




function Stat({
icon,
value,
label
}:{
icon:React.ReactNode;
value:string;
label:string;
}){


return(

<div

className="
rounded-2xl
bg-white/10
p-3
text-center
"

>

<div className="flex justify-center text-blue-200">

{icon}

</div>


<h4

className="
mt-2
text-lg
font-black
text-white
"

>

{value}

</h4>


<p

className="
text-xs
text-white/70
"

>

{label}

</p>


</div>

)

}