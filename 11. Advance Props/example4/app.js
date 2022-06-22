class App extends React.Component {
    
  render() {
    return (
      <div>
        <Greetings who="Shivam" from="Vikash" />
        <Greetings who="Shivam"  />
        <Greetings from="Vikash" />
        <Greetings  />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
// ReactDOM.render(React.createElement(MyApp),myDiv);
ReactDOM.render(<App />, myDiv);
