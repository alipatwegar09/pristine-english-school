import GalleryGrid from "./gallery-grid";


export default function CampusGallery(){

return (

<section

id="gallery"

className="
bg-slate-50

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

Campus Life

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

Discover our inspiring campus environment
where students learn, grow and celebrate.

</p>


</div>



<GalleryGrid />


</div>


</section>

)

}