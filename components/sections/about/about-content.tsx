import { CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/about";


export default function AboutContent() {


return (

<div>


<span
className="
inline-flex

rounded-full

bg-blue-100

px-4
py-2

text-sm

font-bold

text-blue-700

tracking-wide

"
>

{aboutData.badge}

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

{aboutData.title}

</h2>




<p

className="
mt-6

text-base

sm:text-lg

leading-7

sm:leading-8

font-medium

text-slate-700

"

>

{aboutData.description}

</p>




<div

className="
mt-8

grid

gap-4

"

>


{
aboutData.features.map((item)=>(


<div

key={item}

className="
flex
items-start

gap-3

"

>


<CheckCircle2

size={23}

strokeWidth={2.5}

className="
mt-1

flex-shrink-0

text-blue-700

"

/>



<span

className="
font-semibold

text-slate-800

"

>

{item}

</span>


</div>


))

}



</div>


</div>

)

}