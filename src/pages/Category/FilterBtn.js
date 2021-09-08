import React, { Component } from 'react';

class FilterBtn extends Component {
  render() {
    const { currentFilter, filter, handleFilter, text } = this.props;

    return (
      <button
        className={`filter-btn ${
          currentFilter === filter ? 'yellow-btn' : 'gray-btn'
        }`}
        onClick={e => {
          handleFilter(e.currentTarget.id);
        }}
        id={filter}
      >
        {text}
      </button>
    );
  }
}

export default FilterBtn;
