import { useLocation } from "react-router-dom";
import FAQ from "../../components/sections/FAQ/FAQ";
import ListPlans from "../../components/sections/ListPlans/ListPlans";

export default function Plans() {
  const location = useLocation();
  console.log("Dados recebidos em Plans:", location.state);
  return (
    <main>
      <ListPlans />
      <FAQ />
    </main>
  );
}
