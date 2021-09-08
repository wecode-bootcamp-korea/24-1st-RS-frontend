import React, { Component } from 'react';
import CheckBox from './CheckBox';
import ReadyToBuy from './ReadyToBuy';

export default class Modal extends Component {
  state = {
    cartList: [],
    updatedList: [],
    isChecked: false,
  };

  componentDidMount() {
    const url = 'http://10.58.3.176:8000/carts';

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

        this.setState({ cartList });
      });
  }

  render() {
    const { open, close } = this.props;
    const { cartList, isChecked } = this.state;
    const totalAmount = cartList.length;

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
              {cartList.map((cart, idx) => {
                return (
                  <div className="card-wrapper">
                    <CheckBox
                      isChecked={isChecked}
                      handleChechbox={this.handleChechbox}
                    />
                    <ReadyToBuy
                      id={cart.product_id}
                      name={cart.product_name}
                      price={cart.product_price}
                      qty={cart.quantity}
                      img={cart.image_url}
                      del={this.handleCardDelete}
                    />
                  </div>
                );
              })}
            </main>
            <div className="total-sum">
              <div className="select-all">
                <input type="checkbox" />
                <span>
                  전체선택({totalAmount} / {totalAmount})
                </span>
              </div>
              <div className="selected-price">
                <label>현재 총 구매가격:</label>
                <span>total sum</span>
              </div>
            </div>
            <footer className="modal-footer">
              <button className="close" onClick={close}>
                계속 쇼핑하기
              </button>
              <button className="order-to" onClick={close}>
                결제하기
              </button>
            </footer>
          </section>
        )}
      </div>
    );
  }
}
