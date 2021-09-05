import React, { Component } from 'react';

export default class Flavor extends Component {
  render() {
    const { key, flavor, point } = this.props;

    return (
      <div className="flavor-card">
        <label className="flavor" key={key}>
          {flavor}
        </label>
        <span>{point} </span>
      </div>
    );
  }
}
