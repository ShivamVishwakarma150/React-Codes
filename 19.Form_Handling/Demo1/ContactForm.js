import React, { Component } from 'react';
class ContactForm extends Component{
  constructor(props){
    super(props);
    this.state={username:""};
    this.handleChange=this.handleChange.bind(this);

  }
  handleChange(evt){
    this.setState({username:evt.target.value});

  }
  render(){
    return(
      <div>
        <h2>ContactForm</h2>
        <form>
          <label htmlFor='name'>Name</label>
          <input
          type="text"
          placeholder="Type your name"
          value={this.state.username}
          onChange={this.handleChange}
        />

        </form>
        <p>
          you need:<b>{this.state.username}</b>
        </p>
      </div>
    );
  }
}

export default ContactForm;