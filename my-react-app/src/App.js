import React, {Component} from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

const products = [
  {
    name : "Redmi",
    price : 6000
  },
  {
    name : "Samsung",
    price : 10000
  }
];
localStorage.setItem('products',JSON.stringify(products));


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products : JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  onAdd(name, price){
    const products = this.getProducts();
    products.push({
      name,price
    });
    this.setState({products});
  }
  onEditSubmit(name, price, originalName){
    let products = this.getProducts();
    products = products.map(obj => {
      if(obj.name === originalName){
        obj.name = name;
        obj.price = price;
      }
      return obj;
    });
    this.setState({products});
  }
  onDelete(name){
    const products = this.getProducts();
    const filteredProducts = products.filter(item=> {
      return item.name !== name;
    })
    this.setState({products: filteredProducts});
  }
  componentWillMount(){
    const products = this.getProducts()
    this.setState({products});
  }
  getProducts(){
    return this.state.products;
  }
  render(){
    return(
      <div className="App" >
        <AddItem
              onAdd = {this.onAdd}
        />
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return(
             <ProductItem 
             key = {product.name}
             {...product}
             onDelete = {this.onDelete}
             onEditSubmit = {this.onEditSubmit}
             />
            );
          })
        }
      </div>
    );
  }
}

export default App;
