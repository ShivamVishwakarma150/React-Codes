import React, { Component } from "react";
class MyClicker extends Component {
  // handleClick=()=>{
  //     console.log(this);
  //     let today=new Date();
  //     alert("Current Date and Time are : "+today);
  // }
  //kyuki cunstructor ek hi bar chalega
  constructor(props) {
    super(props);
    this.state = { counter: 1 };

    this.handleClick = this.handleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  // we use it when we perform calculation based on previous calculation
  // this is facebook first recommendation
  increment(currentstate) {
    return { counter: currentstate.counter + 1 };
  }
  handleTripleClick(e) {
    // this.setState(this.increment);
    // this.setState(this.increment);
    // this.setState(this.increment);
    this.setState((currentstate)=>{
        return { counter: currentstate.counter + 1 };
    });
    this.setState((currentstate)=>{
        return { counter: currentstate.counter + 1 };
    });
    this.setState((currentstate)=>{
        return { counter: currentstate.counter + 1 };
    });
  }
  render() {
    return (
      <div>
        <h2>Couter is {this.state.counter}</h2>
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.handleTripleClick}>Click Me</button>
      </div>
    );
  }
}
export default MyClicker;
