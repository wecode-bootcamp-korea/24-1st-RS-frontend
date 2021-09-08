import React, { Component } from 'react';

export default class ReadyToBuy extends Component {
  render() {
    const { key, name, price, qty, img } = this.props;

    return (
      <div className="card-wrapper" key={key}>
        <div className="card">
          {/* <input type="checkbox" className="select-box" /> */}
          <header className="card-header">
            <div className="header-text-between">
              <label>제품명 </label>
              <span>{name}</span>
            </div>
            <div className="header-text-between">
              <label>가격: </label>
              <span>{price}</span>
            </div>
            <div className="header-text-between">
              <label>총 기격: </label>
              <span>{price * qty}</span>
            </div>
            <div className="shipping-alert">
              27,000원 이상 구매 시 배송비 무료
            </div>
          </header>
          <main className="card-main">
            <img alt="product-img" src={img} className="img-in-cart" />
            <label>수량: </label>
            <div className="added-product">
              <button className="minus">-</button>
              <span className="amount-count">{qty}개</span>
              <button className="plus">+</button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
