"use client";


import Image from "next/image";
import {motion} from "framer-motion";


export default function GalleryCard({
item,
index
}:any){


return (

<motion.div


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:.5,
delay:index*.1
}}



whileHover={{
scale:1.03
}}



className="

relative

overflow-hidden

rounded-3xl

shadow-lg

group

"


>


<Image

src={item.image}

alt={item.title}

width={600}

height={500}


className="
h-[280px]

sm:h-[320px]

w-full

object-cover

transition

duration-500

group-hover:scale-110

"


/>



<div

className="

absolute

inset-0

bg-gradient-to-t

from-black/60

to-transparent


flex

items-end


p-6

"

>


<h3

className="
text-xl

font-bold

text-white

"

>

{item.title}

</h3>


</div>



</motion.div>

)

}