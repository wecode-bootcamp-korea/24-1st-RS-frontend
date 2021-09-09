import React, { Component } from 'react';
import Menu from './Menu';
import Banner from './Banner';
import BestItemComp from './BestItemComp';
import NewItemComp from './NewItemComp';
import Recommendation from './Recommendation';
import Holiday from './Holiday';
import Time from './Time';
import API from '../../config';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      category: [],
      best: [],
      newItems: [],
      randomPic: [],
    };
  }

  componentDidMount() {
    fetch(`${API}/products/list?order-by=?&limit=20`)
      .then(response => response.json())
      .then(data => this.setState({ products: data.Result }));

    fetch(`${API}/products/categories`)
      .then(response => response.json())
      .then(data => this.setState({ category: data.Result }));

    fetch(`${API}/products/list?limit=3&order-by=-grade`)
      .then(response => response.json())
      .then(data => this.setState({ best: data.Result }));

    fetch(`${API}/products/list?limit=3&order-by=-created_at`)
      .then(response => response.json())
      .then(data => this.setState({ newItems: data.Result }));

    fetch(`${API}/products/list?limit=1&order-by=?`)
      .then(response => response.json())
      .then(data => this.setState({ randomPic: data.Result }));
  }

  render() {
    const { category, products, randomPic, best, newItems } = this.state;

    return (
      <>
        <div className="search-bar"></div>
        <Banner />
        <Menu category={category} />
        <Holiday />
        <Recommendation products={products} />
        {!!randomPic.length && <Time randomPics={randomPic} />}
        <BestItemComp best={best} />
        <NewItemComp new={newItems} />
      </>
    );
  }
}
