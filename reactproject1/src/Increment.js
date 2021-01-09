import React, { useState } from "react";
import "./App.css";

function Increment() {
  const [count, setCount] = useState(0);
  const [isBlue, setBlue] = useState(false);
  const [isPurple, setPurple] = useState(false);

  const increments = () => {
    setCount(count + 1);
    setBlue(!isBlue);
  };

  const decrements = () => {
    setCount(count - 1);
    setBlue(false);
    setPurple(true);
  };

  return (
    <div className="increment">
      <h3 className={isBlue ? "blue" : "purple"}>Change my color</h3>
      <button onClick={increments}>Increment</button>
      <button onClick={decrements}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Increment;
