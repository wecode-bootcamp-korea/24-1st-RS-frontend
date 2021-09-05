import React, { Component } from 'react';

export default class Features extends Component {
  render() {
    const { flavor, side, story } = this.props;

    return (
      <div className="features">
        <div className="quick-flavor">
          <label>맛</label>
          <span>{flavor}</span>
        </div>
        <div className="quick-story">
          <label>담화</label>
          <span>{story}</span>
        </div>
        <div className="quick-side">
          <label>안주</label>
          <span>{side}</span>
        </div>
      </div>
    );
  }
}
