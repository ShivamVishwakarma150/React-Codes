// Images and CRA
import React, { Component } from 'react';
import shivam from "./shivam.jpg";
import "./Myself.css";
class Myself extends Component{

    render(){
        
        return (
            <div className="Myself">
                <h2>This is me</h2>
                <img src={shivam} width={200} height={200}></img>
            </div>
        );
    }
}

export default Myself;