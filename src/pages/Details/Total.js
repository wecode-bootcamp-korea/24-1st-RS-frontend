import React, { Component } from 'react';

export default class Total extends Component {
  render() {
    const { total, quantity, handlePlus, handleMinus } = this.props;

    return (
      <>
        <div className="amount">
          <label className="opt-header">수량</label>
          <div className="select-amount">
            <button onClick={handleMinus} className="minus">
              -
            </button>
            <span className="amount-count">{quantity}</span>
            <button onClick={handlePlus} className="plus">
              +
            </button>
          </div>
        </div>
        <div className="total-price-wrapper">
          <label className="opt-header">총 상품가격</label>
          <div className="total-price">
            <span>{total}&nbsp;원</span>
          </div>
        </div>
      </>
    );
  }
}
