import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>
        <u>Counter Increment & Decrement:</u>
      </h3>
      <h3> Count is : {count}</h3>
      <button onClick={increment}> Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
