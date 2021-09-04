import React, { Component } from 'react';
import './Category.scss';
import Reviewstar from './Reviewstar';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img alt="product-image" src={this.props.image}></img>
        </div>
        <div className="product-text">
          <p className="product-name">{this.props.name}</p>
          <p className="product-price">{this.props.price}원</p>
          <ul className="product-description">
            {this.props.hash.map(idx => {
              return (
                <li className="product-hash" key={idx}>
                  {idx.caption}
                </li>
              );
            })}
          </ul>
          <div className="product-review">
            <Reviewstar />
            <p className="product-rate">{this.props.grade}평점</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
