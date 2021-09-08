import React, { Component } from 'react';
import ReadyToBuy from './ReadyToBuy';

export default class Modal extends Component {
  state = {
    cartList: [],
    updatedList: [],
    isChecked: false,
  };

  componentDidMount() {
    const url = '/data/CartTest.json';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const cartList = res.Result;

        this.setState({ cartList });
      });
    console.log('cartList is >>>', this.state.cartList);
  }

  render() {
    const { open, close } = this.props;
    const { cartList } = this.state;
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
                    <ReadyToBuy
                      id={cart.product_id}
                      name={cart.product_name}
                      price={cart.product_price}
                      qty={cart.quantity}
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
