import React, { Component } from 'react';

import { CardList } from './Card-list';
import Clock from './Clock';
import CountDown from './CountDown';
import Nav from '../../components/Nav/Nav';
import Menu from './Menu';
import Banner from './Banner';
import './Main.scss';
import BestItem from './BestItem';
import NewItem from './NewItem';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
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
        <CardList monsters={this.state.monsters} />
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

        <BestItem />
        <NewItem />
      </>
    );
  }
}
