import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
// import HeroStats from "./hero-stats";

export default function Hero() {
  return (
    <>
   <section className="relative min-h-screen overflow-hidden">

  <HeroBackground />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="grid min-h-screen items-center lg:grid-cols-2 gap-16">

      <HeroContent />

      <HeroImage />

    </div>

  </div>

</section>

      {/* <HeroStats /> */}
    </>
  );
}