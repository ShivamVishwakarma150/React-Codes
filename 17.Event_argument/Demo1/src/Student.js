// Recommended Line
import React, { Component } from 'react';
class Student extends Component{
    handleClick(x,y){
        console.log("Roll :",x,"Name :",y);
    }
    handleArgClick=(e)=>{
        this.handleClick(this.props.roll,this.props.name);
    }
    render(){
        return(
            <div>
                <p>Hello {this.props.name}, your roll no is {this.props.roll}
                <button onClick={this.handleArgClick}>Click Me</button></p>
               
            </div>
        );
    }
}

export default Student;