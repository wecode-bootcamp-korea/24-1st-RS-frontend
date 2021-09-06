import React, { Component } from 'react';

export default class Tasting extends Component {
  render() {
    const { flavorList } = this.props;

    return (
      <div className="tasting-info">
        <label>전통주 테이스팅</label>
        <div className="tasting-card-all">
          {flavorList.map((taste, idx) => {
            return (
              <div className="flavor-card" key={idx}>
                <label className="flavor">{taste.flavor_name}</label>
                <span className="flavor-points">{taste.point}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
