import React, { Component } from "react";

class ClassBaseComponent extends Component {
  render() {
    const addition = () => {
      let p = 15;
      let q = 7;
      let r = p + q;
      return r;
    };
    const subtraction = () => {
      let p = 45;
      let q = 49;
      let r = p - q;
      return r;
    };
    const multiplication = () => {
      let p = 20;
      let q = 59;
      let r = p * q;
      return r;
    };

    const division = () => {
      let p = 49;
      let q = 7;
      let r = p / q;
      return r;
    };

    return (
      <div>
        <h2>
          <u>Class Base Component:</u>
        </h2>
        <h3> Addition is :- {addition()}</h3>
        <h3> Subtraction is :- {subtraction()}</h3>
        <h3> Multiplication is :- {multiplication()}</h3>
        <h3> Division is :- {division()}</h3>
      </div>
    );
  }
}

export default ClassBaseComponent;
