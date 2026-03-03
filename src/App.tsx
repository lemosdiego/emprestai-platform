import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
    </Routes>
  );
}

export default App;
