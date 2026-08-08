import {academicsData} from "@/data/academics-data";


import AcademicCard
from "./academic-card";


export default function AcademicTimeline(){


return (

<div
className="
grid
grid-cols-1
md:grid-cols-4
gap-8
"
>


{
academicsData.map((item)=>(
<AcademicCard
key={item.title}
item={item}
/>
))
}


</div>

)

}