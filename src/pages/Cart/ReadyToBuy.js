import React, { Component } from 'react';

export default class ReadyToBuy extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <header>
            <div className="header1">
              <label>양조장: </label>
              <span>양조장 명</span>
            </div>
            <div className="header2">
              <label>배송비: </label>
              <span>3,000원</span>
            </div>
            <div>27,000원 이상 구매 시 배송비 무료</div>
          </header>
          <div className="added-product">
            <label>name</label>
            <img alt="product-img" src="#" />
          </div>
          <div>
            <div className="select-qty">
              <label>수량: </label>
              <div className="select-amount">
                <button className="minus">-</button>
                <span className="amount-count">qty</span>
                <button className="plus">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="final-price">
          <label>가격: </label>
          <span>price</span>
        </div>
      </div>
    );
  }
}
