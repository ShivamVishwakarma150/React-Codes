import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.item.name, e);
  }
  render() {
    return (
      <tr className="Product">
        <td>{this.props.item.name}</td>
        <td>{this.props.item.qty}</td>
        <td className="btn">
          <button onClick={this.handleClick}>Delete</button>
        </td>
      </tr>
    );
  }
}
