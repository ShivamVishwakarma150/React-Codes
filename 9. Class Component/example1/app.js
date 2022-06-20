class App extends React.Component{
    render(){
       return (
       <div><Hello/></div>
       )
    }
}
let myDiv=document.querySelector("#root");
// ReactDOM.render(React.createElement(MyApp),myDiv);
ReactDOM.render(<App/>,myDiv);n 