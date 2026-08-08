"use client";


import Image from "next/image";
import {motion} from "framer-motion";

import {aboutData} from "@/data/about";


export default function AboutImage(){


return (

<motion.div

initial={{
opacity:0,
x:40
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

max-w-xl

mx-auto

"

>


<Image

src={aboutData.image}

alt="About Pristine English School"

width={700}

height={700}

className="
rounded-3xl

shadow-2xl

w-full

object-cover

"

/>




<div

className="
absolute

bottom-4
left-4

sm:-bottom-6
sm:-left-6


rounded-3xl

bg-blue-600

px-5
py-4

sm:px-8
sm:py-6


text-white

shadow-xl

"

>


<h3

className="
text-3xl

sm:text-4xl

font-black

"

>

{aboutData.experience}

</h3>


<p

className="
mt-1

text-sm

sm:text-base

font-medium

"

>

Years of Excellence

</p>


</div>



</motion.div>

)

}