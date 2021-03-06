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
    const { currImg } = this.state;
    currImg > 0 &&
      this.setState({
        currImg: currImg - 1,
      });
  };

  handleClickRight = () => {
    const { currImg } = this.state;
    currImg < BannerSliderData.length - 1 &&
      this.setState({
        currImg: currImg + 1,
      });
  };

  render() {
    const { currImg } = this.state;
    return (
      <div className="banner-section">
        <div
          className="banner-img"
          style={{
            backgroundImage: `url(${BannerSliderData[currImg].image})`,
          }}
        >
          <div className="left" onClick={this.handleClickLeft}>
            <img
              className="left-arrow arrow"
              alt="left-arrow"
              src="/images/Main/left-arrow.svg"
            />
          </div>
          <div className="center" />
          <div className="right" onClick={this.handleClickRight}>
            <img
              className="right-arrow arrow"
              alt="right-arrow"
              src="/images/Main/left-arrow.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}
