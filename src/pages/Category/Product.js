import React, { Component } from 'react';
import './Category.scss';
import Reviewstar from './Reviewstar';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-image"></div>
        <div className="product-name">복단지</div>
        <div className="product-price">18,000원</div>
        <div className="product-description">
          <p>#많이~달진_않아요</p>
          <p>#쌀_넣어만든_약주</p>
        </div>
        <div className="product-review">
          <Reviewstar />
          <span>4.7평점</span>
          <span>12리뷰</span>
        </div>
      </div>
    );
  }
}

export default Product;
