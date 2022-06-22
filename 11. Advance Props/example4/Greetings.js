class Greetings extends React.Component {
  static defaultProps={
    who:"Shivam",
    from:"Vishwakarma"
};
  render() {
    // here props is instance member se we access using this
    return (
      <h3>
        Good Evening {String(this.props.who)} from {String(this.props.from)}
      </h3>
    );
  }
}
