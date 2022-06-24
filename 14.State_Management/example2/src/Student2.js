import React, { Component } from 'react';

class Student2 extends Component{
    constructor(){
        super();// this ke pahle super ka chalna jaruri hai
        this.state={
            name:"Sumit",
            roll:22
        };
    }
    render(){
        return (
            <div>
                <h3>Name is : {this.state.name}</h3>
                <h3>Roll No is : {this.state.roll}</h3>
            </div>
        );
    }
}

export default Student2;