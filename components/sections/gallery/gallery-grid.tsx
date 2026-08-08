"use client";


import {galleryData} from "@/data/gallery-data";
import GalleryCard from "./gallery-card";


export default function GalleryGrid(){


return (

<div

className="

grid


grid-cols-1


sm:grid-cols-2


lg:grid-cols-3


gap-5


md:gap-8


"

>


{
galleryData.map((item,index)=>(

<GalleryCard

key={item.title}

item={item}

index={index}

/>

))

}


</div>

)

}