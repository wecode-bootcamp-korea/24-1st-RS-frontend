import React, { Component } from 'react';
import { FirstItemComp } from './FirstItemComp';
import './FirstItem.scss';
import FIRST_ITEM_DATA from './FIRST_ITEM_DATA';

export default class FirstItem extends Component {
  constructor() {
    super();
    this.state = {
      //currImg: false,
      x: 0,
    };
  }

  handleClickedLeft = () => {
    this.state.x < 0 &&
      this.setState({
        x: this.state.x + 242,
      });
    console.log('left', this.state.x);
  };

  handleClickedRight = () => {
    this.state.x < Number(this.props.products.length) * 242 &&
      this.setState({
        x: this.state.x - 242,
      });
    console.log('right', this.state.x);
  };
  render() {
    /*let btn_class = this.state.currImg
      ? 'first-item-card-wrapper-clicked-right'
      : 'first-item-card-wrapper';*/
    console.log('length', this.props.products.length);
    return (
      <div className="first-item-wrapper">
        <img
          onClick={this.handleClickedLeft}
          className="arrow-icons-left"
          alt="left-arrow"
          src={FIRST_ITEM_DATA[0].img}
        />
        <div className="first-item-section">
          <div
            className="first-item-card-wrapper"
            style={{ transform: `translateX(${this.state.x}px)` }}
          >
            {this.props.products.map(product => {
              return <FirstItemComp key={product.id} product={product} />;
            })}
          </div>
        </div>
        <img
          onClick={this.handleClickedRight}
          className="arrow-icons-right"
          alt="right-arrow"
          src={FIRST_ITEM_DATA[1].img}
        />
      </div>
    );
  }
}
