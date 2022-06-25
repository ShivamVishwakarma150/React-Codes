import React, { Component } from 'react';
class MyButton extends Component{
    // handleClick=()=>{
    //     console.log(this);
    //     let today=new Date();
    //     alert("Current Date and Time are : "+today);
    // }
    //kyuki cunstructor ek hi bar chalega
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick=()=>{
        console.log(this);
        let today=new Date();
        alert("Current Date and Time are : "+today);

    }
    render(){
        return(
            <button onClick={this.handleClick}>Click Me</button>
        );
    }
}
export default MyButton;