"use client";


import { facilitiesData } from "@/data/facilities-data";
import FacilityCard from "./facility-card";


export default function FacilitiesGrid(){


return (

<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3


gap-6

md:gap-8


"

>


{
facilitiesData.map((item,index)=>(


<FacilityCard

key={item.title}

item={item}

index={index}

/>


))

}


</div>

)

}