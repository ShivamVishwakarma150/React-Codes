class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Emoji Picker</h1>
        <Emoji e1="😁" e2="😊" e3="🤣"/>
        <Emoji e1="😍" e2="😍" e3="😍"/>
        <Emoji e1="😁" e2="😎" e3="😜"/>
      </div> 
    );
  }
}
let myDiv = document.querySelector("#root");
// ReactDOM.render(React.createElement(MyApp),myDiv);
ReactDOM.render(<App />, myDiv);
