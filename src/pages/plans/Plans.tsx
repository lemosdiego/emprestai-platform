import { useLocation } from "react-router-dom";

import ListPlans from "../../components/sections/ListPlans/ListPlans";

export default function Plans() {
  const location = useLocation();
  console.log("Dados recebidos em Plans:", location.state);
  return (
    <main>
      <ListPlans />
    </main>
  );
}
