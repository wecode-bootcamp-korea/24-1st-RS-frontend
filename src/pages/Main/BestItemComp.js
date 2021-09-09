import React, { Component } from 'react';
import BestItemCompDetail from './BestItemCompDetail';
import './BestItem.scss';

export default class BestItemComp extends Component {
  render() {
    return (
      <div className="best-seller-wrapper">
        <p className="desc-word">이번 주 가장 인기 많은 술 TOP3에요!</p>
        <div className="best-seller-section">
          <div className="best-seller">
            <span></span>
            <img
              className="rocket-img"
              alt="rocket-img"
              src="https://www.sooldamhwa.com/static/media/rocket.6513dff4.png"
            />
            <p className="word-below-rocket">베스트 셀러</p>
          </div>
          <div className="best-seller-card-wrapper">
            {this.props.best.map((best, idx) => {
              return <BestItemCompDetail key={idx} product={best} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
