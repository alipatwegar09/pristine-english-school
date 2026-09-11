import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import AdmissionPopup from "./admission-popup";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">
            <HeroContent />
            <HeroImage />
          </div>
        </div>
      </section>

      <AdmissionPopup />
    </>
  );
}