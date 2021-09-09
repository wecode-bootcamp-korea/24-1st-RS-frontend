import React, { Component } from 'react';
import ReadyToBuy from './ReadyToBuy';
import API from '../../config';

export default class Modal extends Component {
  state = {
    cartList: [],
    totalSum: 0,
  };

  componentDidMount() {
    const url = `${API}/carts`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
      },
    })
      .then(res => res.json())
      .then(res => {
        const cartList = res.Result;
        console.log(cartList);

        this.setState({ cartList });
      });
  }

  handleCartUpdate = () => {
    const { cartList } = this.state;

    cartList.forEach(item => {
      const update_url = `${API}/carts/${item.cart_id}`;
      const data = { product_quantity: item.quantity };
      fetch(update_url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
        },
      }).then(res => console.log(res));
    });
  };

  handlePlusBtn = cart_id => {
    const { cartList } = this.state;

    const addQty = cartList.map(item => {
      if (item.cart_id === cart_id) {
        return { ...item, quantity: item.quantity + 1 };
      } else return item;
    });

    this.setState({ cartList: addQty });
  };

  handleMinusBtn = cart_id => {
    const { cartList } = this.state;

    const deductQty = cartList.map(item => {
      if (item.cart_id === cart_id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else if (item.quantity <= 1) {
          return { ...item, quantity: 1 };
        }
      } else return item;
    });

    this.setState({ cartList: deductQty });
  };

  render() {
    const { open, close } = this.props;
    const { cartList } = this.state;

    const totalPrice = cartList
      ?.reduce((acc, item) => acc + item.quantity * item.product_price, 0)
      .toLocaleString();

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open && (
          <section className="modal-section">
            <header className="modal-header">
              <span>장바구니 보기</span>
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main className="main-body">
              {cartList?.map((cart, idx) => {
                return (
                  <div className="card-wrapper" key={idx}>
                    <ReadyToBuy
                      id={cart.cart_id}
                      name={cart.product_name}
                      price={cart.product_price}
                      qty={cart.quantity}
                      image={cart.image_url}
                      handlePlus={this.handlePlusBtn}
                      handleMinus={this.handleMinusBtn}
                    />
                  </div>
                );
              })}
            </main>
            <div className="total-sum">
              <div className="selected-price">
                <label>현재 총 구매가격:</label>
                <span>{totalPrice} 원</span>
              </div>
            </div>
            <footer className="modal-footer">
              <button className="close" onClick={() => this.handleCartUpdate()}>
                계속 쇼핑하기
              </button>
              <button className="order-to" onClick={this.handleToOrder}>
                결제하기
              </button>
            </footer>
          </section>
        )}
      </div>
    );
  }
}
