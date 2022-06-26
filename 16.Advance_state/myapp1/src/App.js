import React, { Component } from "react";
import Lottery from "./Lottery";
class App extends Component {
  render() {
    return (
      <div >
        <Lottery/>
        <Lottery title={"Mini Lotto"} numBalls={4} maxValue={25}/>
        <Lottery title={"Mini Lotto"}  maxValue={25}/>

      </div>
    );
  }
}

export default App;
