import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
      <Product />
    </div>
  );
}

export default App;
