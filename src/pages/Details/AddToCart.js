import React, { Component } from 'react';
import Shipping from './Shipping';
import AddTo from './AddTo';

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

  render() {
    const { price } = this.props;
    const { quantity } = this.state;
    const totalPrice = price * quantity;

    return (
      <div className="aside">
        <div className="add-to-cart">
          <div className="amount">
            <label className="opt-header">수량</label>
            <div className="select-amount">
              <button onClick={this.handleMinusBtn} className="">
                -
              </button>
              <span className="amount-count">{quantity}</span>
              <button
                onClick={this.handlePlusBtn}
                className={quantity === 1 && 'not-changed'}
              >
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
          <AddTo />
        </div>
      </div>
    );
  }
}
