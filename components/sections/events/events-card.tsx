"use client";


import Image from "next/image";
import {motion} from "framer-motion";


export default function EventCard({
event,
index
}:any){


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

transition={{
delay:index*.15
}}

whileHover={{
y:-8
}}

className="
overflow-hidden

rounded-3xl

bg-white

shadow-lg

"

>


<Image

src={event.image}

alt={event.title}

width={500}

height={350}

className="
h-56
w-full
object-cover
"

/>


<div className="p-6">


<p className="
text-sm
font-bold
text-blue-600
">

{event.date}

</p>


<h3 className="
mt-3
text-xl
font-black
text-slate-900
">

{event.title}

</h3>


<p className="
mt-3
text-slate-700
leading-6
">

{event.description}

</p>


</div>


</motion.div>

)

}