import React, { Component } from 'react';
import CountDown from './CountDown';
import Nav from '../../components/Nav/Nav';
import Menu from './Menu';
import Banner from './Banner';
import BestItemComp from './BestItemComp';
import NewItemComp from './NewItemComp';
import Recommendation from './Recommendation';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('/data/Maintest.json')
      .then(response => response.json())
      .then(data => this.setState({ products: data.Result }));
  }

  render() {
    return (
      <>
        <Nav />
        <div className="search-bar">
          <input
            className="search"
            type="search"
            placeholder="검색어를 입력해주세요."
          />
        </div>
        <Banner />
        <Menu />
        <Recommendation products={this.state.products} />
        <div className="time-section">
          <div className="product-img-wrapper">
            <img
              className="product-img"
              alt="random-drink-img"
              src="/images/Main/randomdrink.png"
            />
          </div>
          <div className="time-wrapper">
            <img
              className="clock-img"
              alt="clock-img"
              src="/images/Main/clock.png"
            />
            <p className="time-now">술 마시기 좋은 현재 시간</p>
            <div className="time">
              <CountDown />
            </div>
          </div>
        </div>
        <BestItemComp />
        <NewItemComp />
      </>
    );
  }
}
