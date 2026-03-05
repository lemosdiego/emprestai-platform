import Benefits from "../../components/sections/Benefits/Benefits";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import HowItWorks from "../../components/sections/HowItWorks./HowItWorks";
import SimulationSection from "../../components/sections/SimulationsSection/SimulationSection";
import SocialProof from "../../components/sections/SocialProof/SocialProof.";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Benefits />
      <SimulationSection />
      <FAQ />
    </main>
  );
}
