"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { principalData } from "@/data/principal";



export default function PrincipalImage() {


return (

<motion.div


initial={{
opacity:0,
x:-60
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


className="
relative
flex
justify-center

"


>


<div

className="
relative

"

>


<div

className="
absolute

-inset-4

sm:-inset-5

rounded-full

bg-blue-600/10

blur-2xl

"

/>




<Image

src={principalData.image}

alt={principalData.principal}

width={430}

height={430}


className="

relative

z-10


h-[280px]

w-[280px]


sm:h-[350px]

sm:w-[350px]


lg:h-[430px]

lg:w-[430px]


rounded-full


object-cover


border-[8px]

sm:border-[10px]


border-white


shadow-2xl

"

/>





<div

className="

absolute


bottom-3

right-3


sm:bottom-5

sm:right-5


z-20


flex


h-14

w-14


sm:h-20

sm:w-20


items-center

justify-center


rounded-full


bg-blue-600


shadow-xl


"

>


<Quote

className="text-white"

size={28}

/>


</div>




</div>



</motion.div>


)

}