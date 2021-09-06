import React, { Component } from 'react';
import './Category.scss';
import MainImage from './Mainimage';
import MainText from './Maintext';
import Filter from './Filter';
import Product from './Product.js';
import ProductList from './Productlist.js';
import { categoryAPI } from '../../config.js';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'name',
      category_name: '과실주',
      products: [],
      main: [],
    };
  }

  componentDidMount() {
    fetch(
      `${categoryAPI}/products/list?limit=20&order-by=${this.state.filter}&category=${this.state.category_name}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.Result,
        });
      });

    fetch(`${categoryAPI}/products/category/${this.state.category_name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          main: data.Result,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter) {
      fetch(
        `${categoryAPI}/products/list?limit=20&order-by=${this.state.filter}&category=${this.state.category_name}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            products: data.Result,
          });
        });
    }
  }

  handleFilter = e => {
    this.setState({
      filter: e,
    });
  };

  render() {
    return (
      <div className="category">
        <div className="nav-bar" />
        <MainImage main={this.state.main} />
        <MainText main={this.state.main} />
        <div className="category-product-contents">
          <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
          <ProductList
            products={this.state.products}
            EnterProduct={this.EnterProduct}
            LeaveProduct={this.LeaveProduct}
          />
        </div>
      </div>
    );
  }
}
