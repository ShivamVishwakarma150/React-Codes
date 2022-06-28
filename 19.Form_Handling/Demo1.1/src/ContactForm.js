import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ username: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert("You typed:" + this.state.username);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Type your name"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          
          <b>{this.state.username}</b>
        </form>
      </div>
    );
  }
}
export default ContactForm;
