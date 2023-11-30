import React, { Component } from "react";

class OnChange extends Component {
  constructor() {
    super();
    this.state = {
      name: "XYZ",
    };
  }
  render() {
    return (
      <div>
        <h3>Name is :- {this.state.name}</h3>
        <input
          type="text"
          onChange={(i) => this.setState({ name: i.target.value })}
        />
      </div>
    );
  }
}

export default OnChange;
