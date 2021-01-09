import React, { Component } from "react";

class Counter extends Component {
  /*
  state = {
    count: this.props.value,
  }; */

  /* //old handleIncrement handled by counter component
  handleIncrement = () => {
    console.log("Increment Clicked");
    this.setState({ count: this.state.count + 1 });
  }; */

  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children} //passing childred*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.keey)} //(this.props.counter.id)
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
