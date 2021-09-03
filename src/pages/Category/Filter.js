import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <button
          className={this.props.filter === 'name' ? 'yellow-btn' : 'gray-btn'}
          onClick={this.props.changeColor}
          name="name"
        >
          이름순
        </button>
        <button
          className={this.props.filter === 'recent' ? 'yellow-btn' : 'gray-btn'}
          onClick={this.props.changeColor}
          name="recent"
        >
          최신순
        </button>
        <button
          className={
            this.props.filter === 'popular' ? 'yellow-btn' : 'gray-btn'
          }
          onClick={this.props.changeColor}
          name="popular"
        >
          인기순
        </button>
      </div>
    );
  }
}

export default Filter;
