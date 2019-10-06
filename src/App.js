import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div className="container">
      <h1>E-commerce</h1>
      <div className="row">
        <div className="col-md-7">
        <Products prodcuts={this.state.products} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-md-4">

        </div>
      </div>
      
    </div>
  );
}

export default App;
