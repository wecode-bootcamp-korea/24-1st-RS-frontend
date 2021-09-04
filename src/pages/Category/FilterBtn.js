import React, { Component } from 'react';

class FilterBtn extends Component {
  render() {
    return (
      <button
        className={
          this.props.currentFilter === `${this.props.filter}`
            ? 'yellow-btn filter-btn'
            : 'gray-btn filter-btn'
        }
        onClick={e => {
          this.props.changeFilter(e.currentTarget.id);
        }}
        id={this.props.filter}
      >
        {this.props.text}
      </button>
    );
  }
}

export default FilterBtn;
