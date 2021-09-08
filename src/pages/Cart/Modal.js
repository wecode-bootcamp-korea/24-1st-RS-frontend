import React, { Component } from 'react';
import ReadyToBuy from './ReadyToBuy';

export default class Modal extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    fetch('/data/CartTest.json')
      .then(res => res.json())
      .then(res => {
        const cartList = res.Result;
        this.setState({ cartList });
      });
  }

  handleSelectedProduct = () => {};

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
              {cartList.map(cart => {
                return (
                  <>
                    <ReadyToBuy
                      key={cart.cart_id}
                      name={cart.name}
                      price={cart.price}
                      qty={cart.quantity}
                      img={cart.image}
                    />
                  </>
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
