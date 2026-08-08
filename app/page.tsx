import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Journey from "@/components/sections/journey";
import WhyChoose from "@/components/sections/why-choose";
import PrincipalSection from "@/components/sections/principal";
import Academics from "@/components/sections/academics";
import CampusGallery from "@/components/sections/gallery";
import FacilityCard from "@/components/sections/facilities"
import Achievements from "@/components/sections/acheivements";
import Events from "@/components/sections/events";
import Contact from "@/components/sections/contact";
import Notices from "@/components/sections/notices";
import Home from "@/components/sections/home"
export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      {/* <Home/> */}
      <About />
      <Journey />
      <WhyChoose />
        <PrincipalSection />
        <Academics/>
        <CampusGallery />
        <FacilityCard/>
        <Achievements />
        <Events/>
        <Notices />
        <Contact/>
    </main>
  );
}