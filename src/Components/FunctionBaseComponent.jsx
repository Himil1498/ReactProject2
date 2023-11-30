import React from "react";

function FunctionBaseComponent() {
  const addition = () => {
    let p = 70;
    let q = 80;
    let r = p + q;
    return r;
  };
  const subtraction = () => {
    let p = 34;
    let q = 12;
    let r = p - q;
    return r;
  };
  const multiplication = () => {
    let p = 10;
    let q = 22;
    let r = p * q;
    return r;
  };

  const division = () => {
    let p = 84;
    let q = 8;
    let r = p / q;
    return r;
  };

  return (
    <div>
      <h2>
        <u>Function Base Component:</u>
      </h2>
      <h3>Addtion is :- {addition()}</h3>
      <h3>Subtraction is :- {subtraction()}</h3>
      <h3>Multiplication is :- {multiplication()}</h3>
      <h3>Division is :- {division()}</h3>
    </div>
  );
}

export default FunctionBaseComponent;
