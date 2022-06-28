import React, { Component } from "react";
export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", useremail: "", userpwd: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    alert(
      "You typed:\n" +
        this.state.username +
        "\n" +
        this.state.useremail +
        "\n" +
        this.state.userpwd
    );
    evt.preventDefault();
    this.setState({ username: "", useremail: "", userpwd: "" });
  }
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <span>{this.state.username}</span>
          <br />
          <label htmlFor="mailid">Email</label>
          <br />
          <input
            type="email"
            id="mailid"
            name="useremail"
            value={this.state.useremail}
            onChange={this.handleChange}
          />
          <span>{this.state.useremail}</span>
          <br />
          <label htmlFor="pwd">Password</label>
          <br />
          <input
            type="password"
            id="pwd"
            name="userpwd"
            value={this.state.userpwd}
            onChange={this.handleChange}
          />
          <span>{this.state.userpwd}</span>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
