import React, { Component } from 'react';
import './Details.scss';

export default class Details extends Component {
  render() {
    return (
      <div className="details-wrapper">
        <div className="product-info">
          <div className="info-header">
            <img alt="상품 이미지" src="/images/Details/sample-img.jpeg" />
            <div className="product-summary">
              <div className="product-name">
                <span className="product">고흥 유자주 8%</span>
                <span className="company">어떤하루by녹동양조장</span>
              </div>
              <div className="about-product">
                <span>주종: 살균약주</span>
                <span>도수: 8.0%</span>
                <span>용량: 500ml</span>
                <span className="deliveries">
                  배송기간: 8월 25일 출고(2일 이내 배송)
                </span>
              </div>
              <div className="editor-suggestion">
                <span>어울리는 안주 : 보양식</span>
                <span>유통기한: 유통기한 없음</span>
                <span>보관방법: 상온 보관 기능</span>
              </div>
              <div className="editor-pick">
                <span className="hashtag">#특별한_하루를_위하여</span>
                <span className="hashtag">#달콤한_유자향</span>
                <span>달달한 유자향 한 가득</span>
              </div>
              <div className="prodzuct-price">
                <span>판매가격</span>
                <span className="price">12,000원</span>
              </div>
            </div>
          </div>
          <div className="info-detail-wrapper">
            <div className="flavor-card">
              <label className="flavor"> 바디감 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor">고소한 향 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 화사한 향 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 매운맛 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 맛의강도 </label>
              <progress className="gage" value="20" max="100" />
            </div>
          </div>
          <div className="recommend-wrapper">다른 제품 보기</div>
        </div>
        <div className="aside">
          <div className="add-to-cart">
            <div className="options">
              <label className="opt-header">옵션</label>
              <select className="opt-wrapper">
                <option className="opt-title" value="" selected>
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
                <span className="shipping-to">+(전국택배)</span>
                <span className="shipping-cost">4,000원</span>
              </div>
              <div className="shipping-info-wrapper">
                <span className="shipping-to">+(제주도 및 도서산간)</span>
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
