import React, { Component } from 'react';
import ReadyToBuy from './ReadyToBuy';

export default class Modal extends Component {
  state = {
    cartList: [],
    isChecked: false,
  };

  componentDidMount() {
    const url = '/data/CartTest.json';
    // const url = 'http://10.58.3.176:8000/carts?product_id=${id}';

    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
    //   },
    // })

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const cartList = res.Result;

        this.setState({ cartList });
      });
  }

  handleCheckbox = () => {
    const { cartList } = this.state;

    cartList.reduce();
  };

  handleTotalSum = () => {
    const { cartList } = this.state;
  };

  handleAmount = () => {
    const { cartList } = this.state;

    const amount = cartList.map(amount => amount.quantity);
    this.setState({
      amount: amount - 1,
    });

    console.log(amount);
  };

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
                  <div className="card-wrapper">
                    <input type="checkbox" className="checkbox" />
                    <ReadyToBuy
                      id={cart.product_id}
                      name={cart.product_name}
                      price={cart.product_price}
                      qty={cart.quantity}
                      handleAmount={this.handleAmount}
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
                <span>배송비 추가해서 총 가격 넣을 것</span>
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
