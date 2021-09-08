import React, { Component } from 'react';

export default class Shipping extends Component {
  render() {
    return (
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
    );
  }
}
