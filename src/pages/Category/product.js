import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="product-image"></div>
        <div className="product-name"></div>
        <div className="product-price"></div>
        <div className="product-description"></div>
        <div className="product-review"></div>
      </div>
    );
  }
}

export default Product;
