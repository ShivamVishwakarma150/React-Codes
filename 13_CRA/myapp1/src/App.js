import React, { Component } from 'react';
import "./App.css";
import Myself from './Myself';
class App extends Component{
  render(){
    return(
      <div>
        <Myself/>
        <h2>I am outside Myself </h2>
      </div>
    );
  }
}

export default App;