import { useLocation } from "react-router-dom";
import Simulations from "../../components/sections/Simulations/Simulations";
import FAQ from "../../components/sections/FAQ/FAQ";

export default function Plans() {
  const location = useLocation();
  console.log("Dados recebidos em Plans:", location.state);
  return (
    <main>
      <Simulations />
      <FAQ />
    </main>
  );
}
