import React, { Component } from 'react';
import Features from './Features';
import SideDishes from './SideDishes';

export default class ProductInfo extends Component {
  render() {
    const { id, name, grade, image, hash, price, awards } =
      this.props.productInfo;

    return (
      <div className="quick-view" key={id}>
        <div className="product-name">{name}</div>
        <div className="rates">평점: {grade}</div>
        <div className="marketing-point">
          <div className="main-img">
            <img alt="main-img" src={image} />
          </div>
          <div className="quick-info">
            <div className="tags">
              {hash.map((tag, idx) => {
                return <span key={idx}>{tag.caption}</span>;
              })}
              <span className={!awards ? 'hidden' : 'awards'}># {awards}</span>
            </div>
            <Features />
            <SideDishes />
            <div className="product-price">
              <label className="price-info">판매금액 </label>
              <span className="price">{price}원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
