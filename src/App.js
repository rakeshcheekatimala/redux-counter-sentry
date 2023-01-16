import React from "react";
import { useCounter } from "./use-counter";

import "./style.css";

export default function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="container">
      <h1> Built using Redux</h1>
      <span>Counter is {count} </span>
      <span className="count">0</span>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset(0)}>Reset</button>
        <button onClick={() => methodDoesNotExist()}>Create Error</button>;
      </section>
    </div>
  );
}
