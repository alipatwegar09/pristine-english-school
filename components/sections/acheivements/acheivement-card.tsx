"use client";


import CountUp from "react-countup";
import {motion} from "framer-motion";


export default function AchievementCard({
item,
index
}:any){


const Icon=item.icon;


const value=parseInt(
item.number.replace(/\D/g,"")
);



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



className="

rounded-3xl

bg-white

p-6

md:p-8


text-center


shadow-lg


hover:shadow-2xl


transition-all

duration-300

"


>


<div

className="
mx-auto

flex

h-14

w-14

md:h-16

md:w-16


items-center

justify-center


rounded-2xl


bg-blue-50

text-blue-700

mb-5

"

>

<Icon size={34}/>

</div>




<h3

className="
text-4xl

md:text-5xl


font-black


text-blue-700

"

>

<CountUp

end={value}

duration={2}

/>


{item.number.replace(/[0-9]/g,"")}


</h3>



<h4

className="
mt-3

text-lg

font-bold

text-slate-900

"

>

{item.title}

</h4>



<p

className="
mt-2

text-sm

font-medium

leading-6

text-slate-600

"

>

{item.description}

</p>



</motion.div>

)

}