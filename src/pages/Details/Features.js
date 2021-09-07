import React, { Component } from 'react';

export default class Features extends Component {
  state = {
    sellingPoint: {},
  };

  componentDidMount() {
    fetch('/data/DetailPoint.json')
      .then(res => res.json())
      .then(res => {
        const [sellingPoint] = res.Result;

        this.setState({ sellingPoint });
      });
  }

  render() {
    const { sellingPoint } = this.state;

    return (
      <div className="features">
        <label className="feature-label">매력 포인트</label>
        <div className="feature-flex">
          {Object.keys(sellingPoint).length && (
            <>
              <div className="quick-features">
                <label>맛</label>
                <span>{sellingPoint.point_flavor}</span>
              </div>
              <div className="quick-features">
                <label>담화</label>
                <span>{sellingPoint.point_story}</span>
              </div>
              <div className="quick-features">
                <label>안주</label>
                <span>{sellingPoint.point_side}</span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
