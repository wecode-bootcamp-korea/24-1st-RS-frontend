import React, { Component } from 'react';
import './Category.scss';
import Mainimage from './Mainimage';
import Maintext from './Maintext';
import Filter from './Filter';
import Product from './Product.js';
import Productlist from './Productlist.js';

export default class Category extends Component {
  render() {
    return (
      <div className="category">
        <div className="nav-bar" />
        <Mainimage />
        <Maintext />
        <div className="category-main-contents">
          <Filter />
          <Productlist />
        </div>
      </div>
    );
  }
}
