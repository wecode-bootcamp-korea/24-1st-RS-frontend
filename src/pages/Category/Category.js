import React, { Component } from 'react';
import './Category.scss';
import Mainimage from './Mainimage';
import Maintext from './Maintext';
import Filter from './Filter';
import Product from './Product.js';
import Productlist from './Productlist.js';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'name',
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.111:8000/products/list?limit=20&order_by=name')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.Result,
        });
      });
  }

  changeColor = e => {
    this.setState({
      filter: e.target.name,
    });
  };

  render() {
    return (
      <div className="category">
        <div className="nav-bar" />
        <Mainimage />
        <Maintext />
        <div className="category-product-contents">
          <Filter filter={this.state.filter} changeColor={this.changeColor} />
          <Productlist products={this.state.products} />
        </div>
      </div>
    );
  }
}
