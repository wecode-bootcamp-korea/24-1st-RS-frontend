import React, { Component } from 'react';
import './Details.scss';

export default class Details extends Component {
  render() {
    return (
      <div className="details-cover">
        <div className="product-info">
          <div className="info-header">
            <img alt="상품 이미지" src="/images/Details/sample-img.jpeg" />
            <div className="product-summary">
              <div className="product-name">
                <span className="product">[9+1] 삼천갑자 동방주</span>
                <span className="company">삼오전통주</span>
              </div>
              <div className="about-product">
                <span>주종: 일반증류주</span>
                <span>도수: 18.0%</span>
                <span>용량: 360ml</span>
                <span className="deliveries">배송기간: 2일 이내 배송</span>
              </div>
              <div className="editor-suggestion">
                <span>어울리는 안주 : 보양식</span>
                <span>유통기한: 유통기한 없음</span>
                <span>보관방법: 상온 보관 기능</span>
              </div>
              <div className="editor-pick">
                <span className="hashtag">
                  #새싹삼이_통째로 #달짝지근하고_부드러워요
                </span>
                <span>새싹삼이 들어간 담금 소주</span>
              </div>
              <div className="product-price">
                <span>판매가격</span>
                <span className="price">13,000원</span>
              </div>
            </div>
          </div>
          <div className="info-detail-wrapper">
            <div className="description-card">
              <progress className="ga" value="20" max="100"></progress>
              <span> 제목</span>
              <span> 디테일</span>
            </div>
            <div className="description-card">
              <img className="detail-cut" alt="상세이미지 2" src="#" />
              <span> 제목</span>
              <span> 디테일</span>
            </div>
            <div className="description-card">
              <img className="detail-cut" alt="상세이미지 3" src="#" />
              <span> 제목</span>
              <span> 디테일</span>
            </div>
          </div>
          <div className="recommend-wrapper">다른 제품 보기</div>
        </div>
        <div className="add-to-cart">
          <div className="options">
            <label className="opt-header">세트구성</label>
            <select id="opt-wrapper">
              <option value="" selected>
                ---옵션 선택---
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
            <span>0원</span>
          </div>
          <div className="shipping-cost">
            <div>+(전국택배) 4,000원</div>
            <div>+(제주도 및 도서산간) 6,500원</div>
            <div>본 양조장에서 100,000원 이상 구매 시 배송비 무료!</div>
          </div>
          <div className="add-to-btn">
            <button>장바구니 담기</button>
            <button>바로 구매하기</button>
          </div>
        </div>
      </div>
    );
  }
}
