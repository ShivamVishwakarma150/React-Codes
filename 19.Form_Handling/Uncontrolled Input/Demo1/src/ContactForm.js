import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.unameRef=React.createRef();
      this.emailRef=React.createRef();
      this.pwdRef=React.createRef();
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
      evt.preventDefault();
      //This is react way to giving us acces of dom nodes
      // console.log(this.unameRef);
      // console.log(this.emailRef);
      // console.log(this.pwdRef);
      alert("You typed\n:"+this.unameRef.current.value+
      "\n"+
      this.emailRef.current.value+
      "\n"+
      this.pwdRef.current.value
      );
      this.unameRef.current.value="";
      this.emailRef.current.value="";
      this.pwdRef.current.value="";
      this.unameRef.current.focus();
    }
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <br/>
          <input id='name' type="text" ref={this.unameRef}/>
          <br/>
          <label htmlFor='mailid'>Email</label>
          <br/>
          <input id='mailid' type="email" ref={this.emailRef}/>
          <br/>
          <label htmlFor='pwd'>Password</label>
          <br/>
          <input id='pwd' type="password" ref={this.pwdRef}/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
