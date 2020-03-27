import React, { Component } from "react";
import "./App.css";

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'iphone',
    price: 650
  }
]
localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  UNSAFE_componentWillMount() {
      this.getProducts()
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'))
    this.setState({ products: products });
  }

  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <div key={product.name}>
                <span>{product.name}</span> : <span>{product.price}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
