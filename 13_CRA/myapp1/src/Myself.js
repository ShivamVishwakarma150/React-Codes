import React, { Component } from 'react';
import shivam from "./shivam.jpg";
class Myself extends Component{

    render(){
        console.log(typeof shivam);
        console.log(shivam);
        return (
            <div>
                <h2>This is me</h2>
                <img src={shivam} width={200} height={200}></img>
            </div>
        );
    }
}

export default Myself;