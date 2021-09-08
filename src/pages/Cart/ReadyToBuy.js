import React, { Component } from 'react';

export default class ReadyToBuy extends Component {
  handleCardDelete = () => {
    console.log('this func called');
    const { id } = this.props;
    console.log('id is>>', id);

    const del_url = `http://10.58.3.176:8000/carts?product_id=${id}`;
    const get_url = 'http://10.58.3.176:8000/carts';

    fetch(del_url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
      },
    })
      .then(res => res.json())
      .then(res => {
        fetch(get_url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
          },
        })
          .then(res => res.json)
          .then(res => {
            const cartList = res.Result;

            this.setState({ cartList });
          });
      });
    console.log('Just got =>>>', this.state.cartList);
  };

  render() {
    const { id, name, price, qty, img } = this.props;

    return (
      <div key={id}>
        <div className="card">
          <button className="delete-card" onClick={this.handleCardDelete}>
            &times;
          </button>
          <header className="card-header">
            <div className="header-text-between">
              <label>제품명 </label>
              <span>{name}</span>
            </div>
            <div className="header-text-between">
              <label>가격: </label>
              <span>{price}</span>
            </div>
            <div className="header-text-between">
              <label>총 기격: </label>
              <span>{price * qty}</span>
            </div>
            <div className="shipping-alert">
              27,000원 이상 구매 시 배송비 무료
            </div>
          </header>
          <main className="card-main">
            <img alt="product-img" src={img} className="img-in-cart" />
            <label>수량: </label>
            <div className="added-product">
              <button className="minus">-</button>
              <span className="amount-count">{qty}개</span>
              <button className="plus">+</button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
