"use client";


import {
contactData
}
from "@/data/contact-data";


export default function ContactInfo(){


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

"

>

GET IN TOUCH

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

Let's Connect
With Our School

</h2>





<p

className="
mt-5

text-base

sm:text-lg

font-medium

leading-7

text-slate-700

"

>

Have questions about admissions?
Visit our campus or contact us.
Our team will guide you.

</p>





<div

className="
mt-8

space-y-4

"

>


{
contactData.map((item)=>(


<div

key={item.title}

className="

flex

items-center

gap-4


rounded-2xl

bg-slate-50

p-5


border

border-slate-100


transition-all

hover:shadow-md

"

>


<div

className="
flex

h-12

w-12


items-center

justify-center


rounded-xl


bg-blue-100


text-blue-700

"

>


<item.icon

size={25}

/>


</div>




<div>


<h4

className="
font-black

text-slate-900

"

>

{item.title}

</h4>


<p

className="
mt-1

text-sm

sm:text-base

font-medium

text-slate-600

"

>

{item.description}

</p>


</div>



</div>


))

}


</div>





{/* Google Map Button */}


<a

href="https://maps.google.com/?q=Pristine+English+School"

target="_blank"

rel="noopener noreferrer"


className="

mt-8

inline-flex


items-center

justify-center


rounded-xl


bg-blue-700


px-7

py-4


font-bold


text-white


shadow-lg


transition-all


hover:bg-blue-800


hover:-translate-y-1


"

>

View On Google Maps

</a>



</div>

)

}