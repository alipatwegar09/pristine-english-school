import AchievementsGrid from "./acheivements-grid";


export default function Achievements(){


return (

<section

id="achievements"

className="
relative

overflow-hidden

bg-blue-700

py-16

md:py-24

lg:py-32

"


>


<div

className="
absolute

right-0

top-0

h-72

w-72

rounded-full

bg-white/10

blur-3xl

"


/>



<div

className="
relative

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

text-white

"

>

Our Achievements

</h2>



<p

className="
mt-4

mx-auto

max-w-2xl

text-base

sm:text-lg

font-medium

text-blue-100

"

>

Milestones that reflect our commitment
towards excellence and growth.

</p>


</div>



<AchievementsGrid />


</div>


</section>

)

}