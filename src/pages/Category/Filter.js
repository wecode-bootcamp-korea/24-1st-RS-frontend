import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FILTER_BTN_DATA from './filterBtnData.js';
import FilterBtn from './FilterBtn.js';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        {FILTER_BTN_DATA.map(btn => (
          <FilterBtn
            key={btn.id}
            currentFilter={this.props.filter}
            filter={btn.filter}
            text={btn.text}
            changeFilter={this.props.changeFilter}
          />
        ))}
      </div>
    );
  }
}

export default Filter;
