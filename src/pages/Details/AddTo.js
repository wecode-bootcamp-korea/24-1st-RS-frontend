import React, { Component } from 'react';

export default class AddTo extends Component {
  render() {
    return (
      <div className="add-to-btn">
        <button className="add-cart">장바구니 담기</button>
        <button className="buy-now">바로 구매하기</button>
      </div>
    );
  }
}
