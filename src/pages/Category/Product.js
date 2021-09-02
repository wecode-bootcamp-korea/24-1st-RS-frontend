import React, { Component } from 'react';
import './Category.scss';
import Reviewstar from './Reviewstar';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img
            alt="product-image"
            src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/sd4u-1621826638915-%EB%B3%84%EC%82%B0.jpg"
          ></img>
        </div>
        <div className="product-text">
          <p className="product-name">별산 막걸리</p>
          <p className="product-price">27,000원</p>
          <div className="product-description">
            <p>#새콤달콤</p>
            <p>#요구르트_같은맛</p>
          </div>
          <div className="product-review">
            <Reviewstar />
            <p className="review-rate">4.4평점</p>
            {/* <p className="review-number">5리뷰</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
