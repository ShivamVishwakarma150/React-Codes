import React, { Component } from "react";
import ProductList from "./ProductList";
class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            { name: "JBL EarPhones", qty: 2 },
            { name: "PoleStar BackPack", qty: 3 },
            { name: "One Plus Nord 2", qty: 2 },
            { name: "Apple I-Phone 13", qty: 1 },
            { name: "Canon DSLR", qty: 2 },
            { name: "Dettol N-95 Mask", qty: 4 },
          ]}
        />
      </div>
    );
  }
}
export default App;
