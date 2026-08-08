import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";


export default function Contact(){


return (

<section

id="contact"

className="
bg-white

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


grid

grid-cols-1

lg:grid-cols-2

gap-12

"

>




<ContactForm />
<ContactInfo />

</div>


</section>

)

}