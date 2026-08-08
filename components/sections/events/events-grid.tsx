"use client";


import {eventsData}
from "@/data/events-data";

import EventCard
from "./events-card";


export default function EventsGrid(){

return (

<div

className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-8

"

>


{
eventsData.map((event,index)=>(

<EventCard

key={event.title}

event={event}

index={index}

/>

))

}

</div>

)

}