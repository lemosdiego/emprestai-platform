import { useState } from "react";
import Hero from "../../components/sections/Hero/Hero";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main>
      Hello
      <button onClick={handleClick}>Count: {count}</button>
      <Hero />
    </main>
  );
}
