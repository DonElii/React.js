import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function HelloWorld() {
  const element = <h1>Hello World</h1>;
  return ReactDOM.render(element, document.getElementById("root"));
}

export default HelloWorld;
