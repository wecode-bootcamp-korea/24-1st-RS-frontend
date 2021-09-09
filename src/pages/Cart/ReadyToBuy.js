import React, { Component, Fragment } from 'react';
import API from '../../config';

export default class ReadyToBuy extends Component {
  handleCardDelete = () => {
    const { id } = this.props;
    const del_url = `${API}/carts/${id}`;

    fetch(del_url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.fCPlhBdz7rrwyrTNXbhpF47oTWcLIKI1RQiNTahKTpk',
      },
    }).then(res => {
      console.log(res);
      window.location.reload();
    });
  };

  render() {
    const { id, name, price, qty, handlePlus, handleMinus, image } = this.props;

    return (
      <Fragment>
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
              <span>{price.toLocaleString('ko-KR')} 원</span>
            </div>
            <div className="header-text-between">
              <label>총 기격: </label>
              <span>{(price * qty).toLocaleString('ko-KR')} 원</span>
            </div>
            <div className="shipping-alert">
              200,000원 이상 구매 시 배송비 무료
            </div>
          </header>
          <main className="card-main">
            <img alt="product-img" src={image} className="img-in-cart" />
            <label>수량: </label>
            <div className="added-product">
              <button className="minus" onClick={() => handleMinus(id)}>
                -
              </button>
              <span className="amount-count">{qty}개</span>
              <button className="plus" onClick={() => handlePlus(id)}>
                +
              </button>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}
