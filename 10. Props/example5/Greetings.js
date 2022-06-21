class Greetings extends React.Component {
  render() {
    // here props is instance member se we access using this
    return (
      <h3>
        Good Evening {this.props.who} from {this.props.from}
      </h3>
    );
  }
}
