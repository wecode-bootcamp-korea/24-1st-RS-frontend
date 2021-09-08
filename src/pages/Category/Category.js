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
      sideDish: '',
      products: [],
      main: [],
    };
  }

  handleFetch = (API, callback) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        callback(data);
      });
  };

  handleFilter = e => {
    this.setState({
      filter: e,
    });
  };

  handleSideDishInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSideDish = () => {
    this.handleFetch(
      `${API}/products/list?limit=20&order-by=${this.state.filter}&category=${this.props.match.params.id}&side-dish=${this.state.sideDish}`,
      data =>
        this.setState({
          products: data.Result,
        })
    );
  };

  componentDidMount() {
    const updateProducts = data => this.setState({ products: data.Result });
    const updateMain = data => this.setState({ main: data.Result });

    this.handleFetch(
      `${API}/products/list?limit=20&order-by=${this.state.filter}&category=${this.props.match.params.id}`,
      updateProducts
    );

    this.handleFetch(
      `${API}/products/category/${this.props.match.params.id}`,
      updateMain
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const updateProducts = data => this.setState({ products: data.Result });
    if (this.state.filter !== prevState.filter) {
      this.handleFetch(
        `${API}/products/list?limit=20&order-by=${this.state.filter}&category=${this.props.match.params.id}`,
        updateProducts
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
              handleSideDish={this.handleSideDish}
              handleSideDishInput={this.handleSideDishInput}
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
