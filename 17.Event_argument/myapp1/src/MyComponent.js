import React, { Component } from 'react'
import MyInput from './MyInput';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.compRef=React.createRef();
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(evt){
        this.compRef.current.setFocus();

    }
    render() {
        return (
            <div>
                <MyInput ref={this.compRef}/>
                <button onClick={this.handleClick}>Set Focus</button>
                
            </div>
        );
    }
}

export default MyComponent;
