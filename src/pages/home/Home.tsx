import Benefits from "../../components/sections/Benefits/Benefits";
import FAQ from "../../components/sections/FAQ/FAQ";
import Hero from "../../components/sections/Hero/Hero";
import HowItWorks from "../../components/sections/HowItWorks./HowItWorks";
import SimulationSection from "../../components/sections/SimulationsSection/SimulationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Benefits />
      <SimulationSection />
      <FAQ />
    </main>
  );
}
