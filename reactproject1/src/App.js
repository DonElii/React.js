import React from "react";
import Hello from "./sayHello";
import Tweet from "./Tweet";
import Increment from "./Increment";
import Color_change from "./Color_change";
import Tweet_objects from "./Tweet_objects";
import sayHello from "./HelloWorld";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="app">
      <center>
        {/*<h2 Classname="Welcometitle">Welcome on Twitter</h2>*/}
        <Hello />
        {/*<HelloWorld />*/}
        {/*<Increment />*/}
        <Color_change />

        {/*
        <Tweet
          name="Apple cinnamon pie"
          message="recipe of Apple cinnamon pie"
        />
        <Tweet name="Chocholate mousse" message="recipe of Chocolate mousse" />
        <Tweet name="Almond cake" message="recipe of Almond cake" />
        <Tweet name="Cherry strudel" message="recipe of Cherry strudel" /> */}
        <Tweet_objects />
      </center>
    </div>
  );
}

export default App;
