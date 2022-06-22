class App extends React.Component {
  render() {
    return (
      <div>
       <h3>Course Details</h3>
       <Course name="Java" titles={["Java SE","Java EE","Android"]} />
       <Course name="Front End Tech" titles={["HTML","CSS","Java Script","React JS"]} />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
// ReactDOM.render(React.createElement(MyApp),myDiv);
ReactDOM.render(<App />, myDiv);
