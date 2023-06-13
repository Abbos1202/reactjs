import React, { Component } from "react";

export default class ClassMouseOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  MousePosition = (e) => {
    console.log("Function is runnning");
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mouseover", this.MousePosition);
    console.log("updating");
  }
  componentWillUnmount()  {
    window.removeEventListener("mouseover", this.MousePosition)
  }
  render() {
    return (
      <div>
        X - {this.state.x} Y -{this.state.y}
      </div>
    );
  }
}
