import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from './Menu';
import Banner from './Banner';
import BestItemComp from './BestItemComp';
import NewItemComp from './NewItemComp';
import Recommendation from './Recommendation';
import Holiday from './Holiday';
import Time from './Time';
import Footer from '../../components/Footer/Footer';
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
    fetch(' . /data/Maintest.json')
      .then(response => response.json())
      .then(data => this.setState({ products: data.Result }));

    fetch('http://10.58.1.135:8000/products/categories')
      .then(response => response.json())
      .then(data => this.setState({ category: data.Result }));

    fetch(
      '3 Best Items Only ex) http://10.58.1.111:8000/products/list?best?limit=3'
    )
      .then(response => response.json())
      .then(data => this.setState({ best: data.Result }));

    fetch(
      '3 Newest Items Only ex) http://10.58.1.111:8000/products/list?new?limit=3'
    )
      .then(response => response.json())
      .then(data => this.setState({ new: data.Result }));
  }

  render() {
    console.log(this.state.category);
    return (
      <>
        <Nav />
        <div className="search-bar"></div>
        <Banner />
        <Menu category={this.state.category} />
        <Holiday />
        <Recommendation products={this.state.products} />
        <Time />
        <BestItemComp best={this.state.best} />
        <NewItemComp new={this.state.new} />
        <Footer />
      </>
    );
  }
}
