import React, { Component } from 'react';

export default class Brief extends Component {
  render() {
    const {
      price,
      size,
      dscr,
      degree,
      expireDate,
      keep,
      category,
      name,
      companyInfo,
      mainImage,
      hashtag,
    } = this.props;

    return (
      <div>
        <div className="brief">
          <img alt="상품 이미지" src={mainImage} />
          <div className="product-summary">
            <div className="product-name">
              <span className="product">{name}</span>
              <span className="company">{companyInfo}</span>
            </div>
            <div className="about-product">
              <div className="text-info">
                <label>주종: </label>
                <span>{category} </span>
              </div>
              <div className="text-info">
                <label>도수: </label>
                <span>{degree}%</span>
              </div>
              <div className="text-info">
                <label>용량: </label>
                <span>{size}ml</span>
              </div>
              <div className="text-info">
                <label className="deliveries">배송기간: </label>
                <span>8월 25일 출고(2일 이내 배송)</span>
              </div>
            </div>
            <div className="editor-suggestion">
              <div className="text-info">
                <label>어울리는 안주: </label>
                <span>보양식</span>
              </div>
              <div className="text-info">
                <label>유통기한: </label>
                <span>{expireDate}</span>
              </div>
              <div className="text-info">
                <label>보관방법: </label>
                <span>{keep}</span>
              </div>
            </div>
            <div className="editor-pick">
              {hashtag.map((tag, idx) => {
                return (
                  <span className="hashtag" key={idx}>
                    {tag.caption}
                  </span>
                );
              })}
              <span>{dscr}</span>
            </div>
            <div className="product-price">
              <label>판매가격: </label>
              <span className="price">{price}원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
