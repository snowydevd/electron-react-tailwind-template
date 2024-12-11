import React, { useState } from "react";
import Button from "../ui/button.jsx";
export default function Counter() {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <section>
      <span>{count}</span>
      <button onClick={() => aumentar()}>Aumentar</button>
      <button onClick={() => decrementar()}>Decrementar</button>
      <button onClick={() => reset()}>Reset</button>
    </section>
  );
}
