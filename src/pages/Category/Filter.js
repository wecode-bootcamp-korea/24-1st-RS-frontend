import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <a>이름순</a>
        <a>최신순</a>
        <a>인기순</a>
      </div>
    );
  }
}

export default Filter;
