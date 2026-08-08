"use client";


import {motion} from "framer-motion";


export default function FacilityCard({
item,
index
}:any){


const Icon=item.icon;


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
y:-10
}}


className={`

rounded-3xl

p-6

md:p-8


bg-gradient-to-br

${item.gradient}


border

border-slate-100


shadow-md


hover:shadow-2xl


transition-all

duration-300

`}


>


<div

className="
flex

h-14

w-14


md:h-16

md:w-16


items-center

justify-center


rounded-2xl


bg-white


shadow-md


mb-6

"

>


<Icon

size={34}

strokeWidth={2.3}

className="text-blue-700"

/>


</div>



<h3

className="
text-xl

font-black

text-slate-900

mb-3

"

>

{item.title}

</h3>



<p

className="
text-sm

md:text-base


font-medium


leading-7


text-slate-700

"

>

{item.description}

</p>



</motion.div>

)

}