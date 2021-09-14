import React, { Component } from 'react';
import Shipping from './Shipping';
import API from '../../config';

export default class AddToCart extends Component {
  state = {
    quantity: 1,
  };

  handlePlusBtn = () => {
    const { quantity } = this.state;

    this.setState({
      quantity: quantity + 1,
    });
  };

  handleMinusBtn = () => {
    const { quantity } = this.state;

    quantity > 1 && this.setState({ quantity: quantity - 1 });
  };

  handleAddToBtn = () => {
    const { productID } = this.props;
    const { quantity } = this.state;

    const post_url = `${API}/carts`;
    const data = { product_id: productID, quantity: quantity };

    fetch(post_url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
      },
    })
      .then(res => res.json())
      .then(res => {});
  };

  render() {
    const { price, productID } = this.props;
    const { quantity } = this.state;
    const totalPrice = (price.split(',').join('') * quantity).toLocaleString(
      'ko-KR'
    );

    return (
      <div className="aside">
        <div className="add-to-cart">
          <div className="amount">
            <label className="opt-header">수량</label>
            <div className="select-amount">
              <button onClick={this.handleMinusBtn}>-</button>
              <span className="amount-count">{quantity}</span>
              <button onClick={this.handlePlusBtn} className="not-changed">
                +
              </button>
            </div>
          </div>
          <div className="total-price-wrapper">
            <label className="opt-header">총 상품가격</label>
            <div className="total-price">
              <span>{totalPrice} &nbsp;원</span>
            </div>
          </div>
          <Shipping />
          <div className="add-to-btn" key={productID}>
            <button className="add-cart" onClick={this.handleAddToBtn}>
              장바구니 담기
            </button>
            <button className="buy-now" onClick={this.handleAddToBtn}>
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
