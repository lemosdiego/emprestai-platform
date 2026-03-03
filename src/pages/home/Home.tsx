import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main>
      Hello
      <button onClick={handleClick}>Count: {count}</button>
    </main>
  );
}
