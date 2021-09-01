import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <button>기본순</button>
        <button>인기순</button>
        <button>최신순</button>
      </div>
    );
  }
}

export default Filter;
