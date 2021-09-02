import React, { Component } from 'react';
import './BestItem.scss';
import { BestSellerMockData } from './BestSllerMockData';

export default class BestItem extends Component {
  render() {
    return (
      <div className="best-seller-wrapper">
        <p>이번 주 가장 인기 많은 술 TOP3에요!</p>
        <div className="best-seller-section">
          <div className="best-seller">
            <span></span>
            <img
              className="rocket-img"
              src="https://www.sooldamhwa.com/static/media/rocket.6513dff4.png"
            />
            <p>베스트 셀러</p>
          </div>
          <div className="best-seller-card-wrapper">
            <div className="best-seller-card">
              <img
                className="best-seller-img"
                src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/9QZ4-1620961678875-%EB%8B%B4%EC%9D%80.jpg"
              />
              <div className="best-seller-desc">
                <p>담은</p>
                <p>29,160</p>
                <p>#입안을_가득_채우는_푸근함</p>
                <p>#카페라떼처럼_부드러운</p>
              </div>
            </div>
            <div className="best-seller-card">
              <div>img</div>
              <div>description</div>
            </div>
            <div className="best-seller-card">
              <div>img</div>
              <div>description</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
