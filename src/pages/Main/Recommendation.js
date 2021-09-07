import React, { Component } from 'react';
import { FirstItemComp } from './FirstItemComp';
import './FirstItem.scss';
import FIRST_ITEM_DATA from './FIRST_ITEM_DATA';

const CARD_WIDTH = 242;
const prevBtn = FIRST_ITEM_DATA[0].img;
const nextBtn = FIRST_ITEM_DATA[1].img;

export default class Recommendation extends Component {
  constructor() {
    super();
    this.state = {
      //currImg: false,
      currentOffsetX: 0,
    };
  }

  handleClickedLeft = () => {
    const { currentOffsetX } = this.state;

    if (currentOffsetX < 0) {
      this.setState({
        currentOffsetX: currentOffsetX + CARD_WIDTH,
      });
    }
  };

  handleClickedRight = () => {
    const { currentOffsetX } = this.state;
    const { products } = this.props;

    if (currentOffsetX < products.length * CARD_WIDTH) {
      this.setState({
        currentOffsetX: currentOffsetX - CARD_WIDTH,
      });
    }
  };

  render() {
    const { currentOffsetX } = this.state;
    const { products } = this.props;

    return (
      <div className="first-item-wrapper">
        <img
          onClick={this.handleClickedLeft}
          className="arrow-icons-left"
          alt="left-arrow"
          src={prevBtn}
        />
        <div className="first-item-section">
          <div
            className="first-item-card-wrapper"
            style={{ transform: `translateX(${currentOffsetX}px)` }}
          >
            {products.map(product => {
              return <FirstItemComp key={product.id} product={product} />;
            })}
          </div>
        </div>
        <img
          onClick={this.handleClickedRight}
          className="arrow-icons-right"
          alt="right-arrow"
          src={nextBtn}
        />
      </div>
    );
  }
}
