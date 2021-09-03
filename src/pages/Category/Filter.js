import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     className: '',
  //   };
  // }
  // changeColor = e => {
  //   const { className } = e.target;
  //   this.setState({
  //     className:
  //   });
  // };

  render() {
    return (
      <div className="filter">
        <button className="gray-btn">이름순</button>
        <button className="gray-btn">최신순</button>
        <button className="gray-btn">인기순</button>
      </div>
    );
  }
}

export default Filter;
