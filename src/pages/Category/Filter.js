import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FILTER_BTN_DATA from './filterBtnData.js';
import FilterBtn from './FilterBtn.js';

class Filter extends Component {
  render() {
    return (
      <>
        <div className="filter">
          {FILTER_BTN_DATA.map(btn => (
            <FilterBtn
              key={btn.id}
              currentFilter={this.props.filter}
              filter={btn.filter}
              text={btn.text}
              handleFilter={this.props.handleFilter}
            />
          ))}
        </div>
        <input
          className="filter-input"
          placeholder="어떤 안주와 즐기고 싶으세요?"
          name="sideDish"
          onChange={this.props.handleSideDishInput}
        />
        <button
          className="filter-side-dish-btn"
          onClick={this.props.handleSideDish}
        >
          안주로 검색하기
        </button>
      </>
    );
  }
}

export default Filter;
