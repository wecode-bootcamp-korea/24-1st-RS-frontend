import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  render() {
    return (
      <div className="category">
        <div className="nav-bar" />
        <div className="main-image" />
        <div className="main-text">
          <div>탁주</div>
          <div>장수, 지평 빼고 맛있는 막걸리는 다 있어요</div>
        </div>
      </div>
    );
  }
}
