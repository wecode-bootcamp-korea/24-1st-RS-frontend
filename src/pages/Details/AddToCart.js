import React, { Component } from 'react';

export default class AddToCart extends Component {
  render() {
    return (
      <div>
        <div className="aside">
          <div className="add-to-cart">
            <div className="options">
              <label className="opt-header">옵션</label>
              <select className="opt-wrapper">
                <option className="opt-title" value="" defaultValue>
                  어떤 옵션을 원하시나요?
                </option>
                <option value="opt1">opt1</option>
                <option value="opt2">opt2</option>
                <option value="opt3">opt3</option>
                <option value="opt4">opt4</option>
                <option value="opt5">opt5</option>
              </select>
            </div>
            <div className="amount">
              <label className="opt-header">수량</label>
              <div className="select-amount">
                <button> - </button>
                <span className="amount-count">1</span>
                <button> + </button>
              </div>
            </div>
            <div className="total-price-wrapper">
              <label className="opt-header">총 상품가격</label>
              <div className="total-price">
                <span>0원</span>
              </div>
            </div>
            <div className="shipping-info">
              <div className="shipping-info-wrapper">
                <label className="shipping-to">+(전국택배)</label>
                <span className="shipping-cost">4,000원</span>
              </div>
              <div className="shipping-info-wrapper">
                <label className="shipping-to">+(제주도 및 도서산간)</label>
                <span className="shipping-cost">6,500원</span>
              </div>
              <div className="shipping-info-alert">
                본 양조장에서 100,000원 이상 구매 시 배송비 무료!
              </div>
            </div>
            <div className="add-to-btn">
              <button className="add-cart">장바구니 담기</button>
              <button className="buy-now">바로 구매하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
