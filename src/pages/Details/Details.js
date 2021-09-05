import React, { Component } from 'react';
import './Details.scss';

import AddToCart from './AddToCart';
import QuickView from './QuickView';
import Flavor from './Flavor';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoList: [],
      flavorList: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailTest2.json')
      .then(res => res.json())
      .then(res => this.setState({ infoList: res.Result }));

    fetch('/data/DetailFlavor.json')
      .then(res => res.json())
      .then(res => this.setState({ flavorList: res.Result }));
  }

  render() {
    const { infoList } = this.state;

    return (
      <div className="details-wrapper">
        {infoList.map(product => {
          return (
            <QuickView
              infoList={infoList}
              hashtag={product.hash}
              awards={product.awards}
            />
          );
        })}
        <div className="product-description">
          <div className="facts"></div>
          <div className="tasting-info"></div>
        </div>
        {/* {infoList.map(product => {
          return <AddToCart price={product.price} key={product.id} />;
        })} */}
      </div>
    );
  }
}
