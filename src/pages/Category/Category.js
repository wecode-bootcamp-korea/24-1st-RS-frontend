import React, { Component } from 'react';
import './Category.scss';
import MainImage from './Mainimage';
import MainText from './Maintext';
import Filter from './Filter';
import ProductList from './Productlist.js';
import API from '../../config.js';

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

  handleFilter = e => {
    this.setState({
      filter: e,
    });
  };

  handleFetch = (API, statename) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          [statename]: data.Result,
        });
      });
  };

  componentDidMount() {
    this.handleFetch(
      `${API}/products/list?limit=20&order-by=${this.state.filter}&category=${this.state.category_name}`,
      'products'
    );

    this.handleFetch(
      `${API}/products/category/${this.state.category_name}`,
      'main'
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter) {
      this.handleFetch(
        `${API}/products/list?limit=20&order-by=${this.state.filter}&category=${this.state.category_name}`,
        'products'
      );
    }
  }

  render() {
    return (
      <>
        <div className="category">
          <div className="nav-bar" />
          <MainImage main={this.state.main} />
          <MainText main={this.state.main} />
          <div className="category-product-contents">
            <Filter
              filter={this.state.filter}
              handleFilter={this.handleFilter}
            />
            <ProductList
              products={this.state.products}
              EnterProduct={this.EnterProduct}
              LeaveProduct={this.LeaveProduct}
            />
          </div>
        </div>
      </>
    );
  }
}
