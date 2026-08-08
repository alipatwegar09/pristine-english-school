import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroStats from "./hero-stats";
import HeroScroll from "./hero-scroll";
import HeroWave from "./hero-wave";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <HeroBackground />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-36 pb-40">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

      <HeroStats />

      <HeroScroll />

      <HeroWave />

    </section>
  );
}