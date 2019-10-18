import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: {
        product1: ("name", "price", "image"),
        product2: ("name", "price", "image")
      }
    };
  };

  getInventory() {
    axios.get("http://localhost: 4000/api/inventory").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }

  render() {

  return (
    <div className="App">
      <Dashboard />
      <Form postProduct={this.postProduct}/>
      <Header />
      <Product />
    </div>
  );
}};


