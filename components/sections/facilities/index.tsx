import FacilitiesGrid from "./facilities-grid";


export default function Facilities(){


return (

<section

id="facilities"

className="
bg-white

py-16

md:py-24

lg:py-32

overflow-hidden

"

>


<div

className="
mx-auto

max-w-7xl

px-5

sm:px-6

"


>


<div

className="
text-center

mb-12

md:mb-16

"

>


<h2

className="
text-3xl

sm:text-4xl

lg:text-5xl

font-black

text-slate-900

"

>

Our Facilities

</h2>


<p

className="
mt-4

max-w-2xl

mx-auto

text-base

sm:text-lg

font-medium

text-slate-700

"

>

Creating a safe, modern and inspiring
environment for every learner.

</p>


</div>



<FacilitiesGrid />


</div>


</section>

)

}