import React, { Component } from 'react';
import { BannerSliderData } from './BannerSliderData';
export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      currImg: 0,
    };
  }

  handleClickLeft = () => {
    this.setState({
      currImg: this.state.currImg - 1,
    });
  };

  handleClickRight = () => {
    this.setState({
      currImg: this.state.currImg + 1,
    });
  };

  render() {
    return (
      <div className="banner-section">
        <div
          className="banner-img"
          style={{
            backgroundImage: `url(${
              BannerSliderData[this.state.currImg].image
            })`,
          }}
        >
          <div
            className="left"
            onClick={this.state.currImg > 0 && this.handleClickLeft}
          ></div>
          <div className="center"></div>
          <div
            className="right"
            onClick={
              this.state.currImg < BannerSliderData.length - 1 &&
              this.handleClickRight
            }
          ></div>
        </div>
      </div>
    );
  }
}
