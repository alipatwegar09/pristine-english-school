"use client";


import {
achievementsData
}
from "@/data/acheivements-data";


import AchievementCard
from "./acheivement-card";



export default function AchievementsGrid(){


return (

<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4


gap-6

md:gap-8


"

>


{
achievementsData.map((item,index)=>(


<AchievementCard

key={item.title}

item={item}

index={index}

/>


))

}


</div>

)

}