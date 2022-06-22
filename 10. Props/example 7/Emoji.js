class Emoji extends React.Component {
  render() {
    // here props is instance member se we access using this
    const {e1,e2,e3}=this.props;
    const result = (e1==e2 && e2 == e3);
    return (
      <div>
        <span>{e1}</span>
        <span>{e2}</span>
        <span>{e3}</span>
        <p>{result?"You win":"You Loose"}</p>

      </div>
    );
  }
}
