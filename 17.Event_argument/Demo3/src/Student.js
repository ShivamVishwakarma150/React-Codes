// Recommended Line
import React, { Component } from 'react';
class Student extends Component{
    handleClick(x,y,e){
        console.log("Roll :",x,"Name :",y);
    }
    
    render(){
        return(
            <div>
                <p>Hello {this.props.name}, your roll no is {this.props.roll}
                <button onClick={this.handleClick.bind(this,this.props.roll,this.props.name)}>Click Me</button></p>
               
            </div>
        );
    }
}

export default Student;