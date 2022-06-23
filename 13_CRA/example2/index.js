
// without ./ it searches in node modules "react-dom"

import ReactDOM from "react-dom";
import "./index.css";
//  ./ represents current location
import App from "./App";
ReactDOM.render(<App/>,document.getElementById("root"));