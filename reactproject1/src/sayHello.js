import React from "react";

function Hello() {
  const sayHello = () => {
    console.log("Szijja-mia");
  };
  return (
    <div className="hello">
      <center>
        <div>
          <h5>This is the hello component</h5>
          <button onClick={sayHello}>Szijja</button>
          <hr></hr>
        </div>
        <button class="btn btn-success">Give a Hug</button>
        <button class="btn btn-primary">Get Started</button>
      </center>
    </div>
  );
}

export default Hello;
