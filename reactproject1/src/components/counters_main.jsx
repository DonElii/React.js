import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            keey={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // selected={true}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
