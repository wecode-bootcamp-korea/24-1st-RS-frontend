import React, { Component } from 'react';
import Product from './Product.js';
import './Category.scss';

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        {this.props.products.map(product => {
          return (
            <Product
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              hash={product.hash}
              grade={product.grade}
              side_dish={product.side_dish}
              dgree={product.dgree}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
