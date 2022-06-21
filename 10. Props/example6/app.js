class App extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ravi"
          age={15}
          subjects={["phy", "chem", "maths"]}
          marks={[50,60,70]}
          isPass={true}
          address={{city:"Bhopal",pincode:462016}}
        />
      </div>
    );
  }
}
let myDiv = document.querySelector("#root");
// ReactDOM.render(React.createElement(MyApp),myDiv);
ReactDOM.render(<App />, myDiv);
