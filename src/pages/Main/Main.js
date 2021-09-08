import React, { Component } from 'react';
import Menu from './Menu';
import Banner from './Banner';
import BestItemComp from './BestItemComp';
import NewItemComp from './NewItemComp';
import Recommendation from './Recommendation';
import Holiday from './Holiday';
import Time from './Time';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      category: [],
      best: [],
      new: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.135:8000/products/list?order-by=?&limit=20')
      .then(response => response.json())
      .then(data => this.setState({ products: data.Result }));

    fetch('http://10.58.1.135:8000/products/categories')
      .then(response => response.json())
      .then(data => this.setState({ category: data.Result }));

    fetch('http://10.58.1.135:8000/products/list?limit=3&order-by=-grade')
      .then(response => response.json())
      .then(data => this.setState({ best: data.Result }));

    fetch('http://10.58.1.135:8000/products/list?limit=3&order-by=-created_at')
      .then(response => response.json())
      .then(data => this.setState({ new: data.Result }));
  }

  render() {
    console.log(this.state.category);
    return (
      <>
        <div className="search-bar"></div>
        <Banner />
        <Menu category={this.state.category} />
        <Holiday />
        <Recommendation products={this.state.products} />
        <Time />
        <BestItemComp best={this.state.best} />
        <NewItemComp new={this.state.new} />
      </>
    );
  }
}
