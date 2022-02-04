import React from "react";

const Counter = ({ value, decrement, increment, reset }) => {
  return (
    <div className="counter">
      <div className="counter__main">
        <button
          className={value === 0 ? "invisible" : "fat"}
          onClick={decrement}
        >
          -
        </button>
        <button className="violet number">{value}</button>
        <button
          className={value > 10 ? "invisible" : "fat"}
          onClick={increment}
        >
          +
        </button>
      </div>
      <button className="violet" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
