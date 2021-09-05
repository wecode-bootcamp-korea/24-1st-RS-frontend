import React, { Component } from 'react';
import Total from './Total';
import Shipping from './Shipping';
import AddTo from './AddTo';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      qty: 0,
    };
  }

  handlePlusBtn = () => {
    const { qty } = this.state;
    const { price } = this.props;

    this.setState({
      qty: qty + 1,
      total: (qty + 1) * price,
    });
  };

  handleMinusBtn = () => {
    const { qty } = this.state;
    const { price } = this.props;

    qty > 0 && this.setState({ qty: qty - 1, total: (qty - 1) * price });
  };

  render() {
    const { qty, total } = this.state;

    return (
      <div>
        <div className="aside">
          <div className="add-to-cart">
            <Total
              quantity={qty}
              handlePlus={this.handlePlusBtn}
              handleMinus={this.handleMinusBtn}
              total={total}
            />
            <Shipping />
            <AddTo />
          </div>
        </div>
      </div>
    );
  }
}
