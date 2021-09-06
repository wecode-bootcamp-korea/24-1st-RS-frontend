import React, { Component } from 'react';
import { Fragment } from 'react';

export default class Features extends Component {
  render() {
    const { flavor, side, story } = this.props;

    return (
      <div className="features">
        <label className="feature-label">매력 포인트</label>
        <div className="feature-flex">
          <div className="quick-features">
            <label>맛</label>
            <span>{flavor}</span>
          </div>
          <div className="quick-features">
            <label>담화</label>
            <span>{story}</span>
          </div>
          <div className="quick-features">
            <label>안주</label>
            <span>{side}</span>
          </div>
        </div>
      </div>
    );
  }
}
