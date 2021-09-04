import React, { Component } from 'react';
import './Category.scss';
import MainImage from './Mainimage';
import MainText from './Maintext';
import Filter from './Filter';
import Product from './Product.js';
import ProductList from './Productlist.js';

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
      `http://211.110.167.131:8000/products/list?limit=5&order-by=${this.state.filter}&category=${this.state.category_name}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.Result,
        });
      });

    fetch(
      `http://211.110.167.131:8000/products/category/${this.state.category_name}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          main: data.Result,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.filter !== prevState.filter &&
      fetch(
        `http://211.110.167.131:8000/products/list?limit=5&order-by=${this.state.filter}&category=${this.state.category_name}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            products: data.Result,
          });
        });
  }

  changeFilter = e => {
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
          <Filter filter={this.state.filter} changeFilter={this.changeFilter} />
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}
