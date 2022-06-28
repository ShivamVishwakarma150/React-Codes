// Recommended Line
import React, { Component } from 'react';
class Student extends Component{
    handleClick(x,y){
        console.log("Roll :",x,"Name :",y);
    }
    // put this entire code in onClick itself
    // handleArgClick=(e)=>{
    //     this.handleClick(this.props.roll,this.props.name,e);
    // }
    render(){
        return(
            <div>
                <p>Hello {this.props.name}, your roll no is {this.props.roll}
                <button onClick={(e)=>{
                    this.handleClick(this.props.roll,this.props.name,e);
                }}>Click Me</button></p>
               
            </div>
        );
    }
}

export default Student;