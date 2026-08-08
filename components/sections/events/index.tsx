import EventsGrid from "./events-grid";


export default function Events(){

return (

<section

id="events"

className="
bg-slate-50

py-16

md:py-24

lg:py-32

"

>


<div

className="
max-w-7xl
mx-auto
px-5
sm:px-6

"

>


<div className="
text-center
mb-12
">


<h2

className="
text-3xl
sm:text-4xl
lg:text-5xl

font-black

text-slate-900

"

>

School Events

</h2>


<p

className="
mt-4
text-slate-700
font-medium

"

>

Stay connected with our latest activities
and celebrations.

</p>


</div>



<EventsGrid />


</div>


</section>

)

}