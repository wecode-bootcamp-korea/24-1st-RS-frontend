import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const { productInfo } = this.props;

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
              <li>{productInfo.category}</li>
              <li>{productInfo.degree}%</li>
              <li>{productInfo.ml}ml</li>
              <li>{productInfo.expireDate}</li>
              <li>{productInfo.keep}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
