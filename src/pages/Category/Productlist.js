import React, { Component } from 'react';
import Product from './Product.js';
import './Category.scss';

class Productlist extends Component {
  render() {
    return (
      <div className="product-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Productlist;
