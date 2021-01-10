// import React from "react";
// import Hello from "./sayHello";
// import Tweet from "./Tweet";
// import Increment from "./Increment";
// import Color_change from "./Color_change";
// import Tweet_objects from "./Tweet_objects";
// import sayHello from "./HelloWorld";
// import HelloWorld from "./HelloWorld";
// import NavBar from "./components/navbar";
// import "./App.css";
// import Counters from "./components/counters_main";

// function App() {
//   return (
//     <div className="app">
//       <center>
//         {/*<h2 Classname="Welcometitle">Welcome on Twitter</h2>*/}

//         <NavBar />
//         <Hello />
//         {/*<HelloWorld />*/}
//         {/*<Increment />*/}
//         <Color_change />

//         {/*
//         <Tweet
//           name="Apple cinnamon pie"
//           message="recipe of Apple cinnamon pie"
//         />
//         <Tweet name="Chocholate mousse" message="recipe of Chocolate mousse" />
//         <Tweet name="Almond cake" message="recipe of Almond cake" />
//         <Tweet name="Cherry strudel" message="recipe of Cherry strudel" /> */}

//         <Tweet_objects />
//         <Counters />
//       </center>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Hello from "./sayHello";
import colorChange from "./Color_change";
import tweetObjects from "./Tweet_objects";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters_main";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters]; //cloning of this.state.counter array - spread opertor [...]
    const index = counters.indexOf(counter); //define index
    counters[index] = { ...counter }; //use [index] as parameter
    counters[index].value++; //increase the value
    console.log(this.state.counters[0]);
    this.setState({ counters }); //setState to let React update the state
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      //use the map method to get all existing states values from counter
      c.value = 0; //set the counter.value to 0
      return c;
    });
    this.setState({ counters }); //call this new array with SetState
  };

  handleDelete = (counterID) => {
    //console.log("Event Handler Called", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    console.log(counters);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.length}
          //totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
