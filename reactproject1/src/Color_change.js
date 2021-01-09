import React, { useState } from "react";
import "./App.css";

function Color_change() {
  const [count, setCount] = useState(0);
  const [isBlue, setBlue] = useState(false);
  const [isPurple, setPurple] = useState(false);

  const increments = () => {
    setCount(count + 1);
    setBlue(true);
  };

  const decrements = () => {
    setCount(count - 1);
    setBlue(false);
    setPurple(true);
  };

  return (
    <div className="color_change">
      <h5 className={isBlue ? "blue" : "purple"}>Change my color</h5>
      <button onClick={increments}>Increment</button>
      <button onClick={decrements}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Color_change;
