import React, { Component } from 'react';

class MainImage extends Component {
  render() {
    return (
      <div className="main-image">
        <img alt="main-image" src={this.props.main.image_url} />
      </div>
    );
  }
}

export default MainImage;
