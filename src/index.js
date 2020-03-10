import React from "react";
import { render } from "react-dom";

function Hello() {
  return <p>Hello</p>;
}

render(<Hello />, document.getElementById("app"));
