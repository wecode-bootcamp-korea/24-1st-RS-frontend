import React, { Component, Fragment } from 'react';

export default class SideDishes extends Component {
  render() {
    const { dishes } = this.props;

    return (
      <div className="sides-all">
        {dishes.map((sides, idx) => {
          return (
            <Fragment key={idx}>
              <div className="sidedishes">
                <img alt="sidedishes" src={sides.image_url} />
                <label>{sides.name}</label>
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
