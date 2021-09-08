import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const { category_name, dgree, ml, expire_date, keep } =
      this.props.productInfo;

    return (
      <div className="facts">
        <label>전통주 정보</label>
        <div className="table">
          <div className="col-1">
            <ul>
              <li>주종</li>
              <li>도수</li>
              <li>용량</li>
              <li>유통기한</li>
              <li>보관방법</li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>{category_name}</li>
              <li>{dgree}%</li>
              <li>{ml}ml</li>
              <li>{expire_date}</li>
              <li>{keep}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
