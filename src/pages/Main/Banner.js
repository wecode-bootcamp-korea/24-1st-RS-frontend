import React, { Component } from 'react';
//import { SliderData } from './BannerSliderData';

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner-section">
          <img
            alt="banner-img"
            className="banner-img"
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80&size=180x180"
          />
        </div>
      </>
    );
  }
}
