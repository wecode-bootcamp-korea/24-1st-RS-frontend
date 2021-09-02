import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <button>이름순</button>
        <button>최신순</button>
        <button>인기순</button>
      </div>
    );
  }
}

export default Filter;
