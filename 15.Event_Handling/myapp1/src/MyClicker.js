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
    this.state = { num: 1 };

    this.genRandom = this.genRandom.bind(this);
  }
  genRandom() {
    let randNum = Math.trunc(Math.random() * 10) + 1;
    this.setState({ num: randNum });
  }

  render() {
    return (
      <div>
        <h2>Current random num is : {this.state.num}</h2>
        <h3>
          {this.state.num !== 6 ? 
          (
            <button onClick={this.genRandom}>Generate New Number</button>
          ) :
        (
            <p>You win</p>
          )}
        </h3>
      </div>
    );
  }
}
export default MyClicker;
