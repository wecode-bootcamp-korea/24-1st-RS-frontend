import React, { Component } from 'react';
import Features from './Features';
import SideDishes from './SideDishes';

export default class ProductInfo extends Component {
  render() {
    const { productInfo } = this.props;

    return (
      <div className="quick-view" key={productInfo.id}>
        <div className="product-name">{productInfo.name}</div>
        <div className="rates">평점: {productInfo.grade}</div>
        <div className="marketing-point">
          <div className="main-img">
            <img alt="main-img" src={productInfo.image} />
          </div>
          <div className="quick-info">
            <div className="tags">
              {productInfo.hashtag.map((tag, idx) => {
                return <span key={idx}>{tag.caption}</span>;
              })}
              <span className={!productInfo.awards ? 'hidden' : 'awards'}>
                # {productInfo.awards}
              </span>
            </div>
            <Features />
            <SideDishes />
            <div className="product-price">
              <label className="price-info">판매금액 </label>
              <span className="price">{productInfo.price}원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
