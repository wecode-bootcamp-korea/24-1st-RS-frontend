import React, { Component, Fragment } from 'react';
import './Details.scss';

import AddToCart from './AddToCart';
import QuickView from './QuickView';
import MainDescription from './MainDescription';
import Tasting from './Tasting';

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
    const { infoList, flavorList } = this.state;

    return (
      <div className="details-wrapper">
        {infoList.map(product => {
          return (
            <QuickView
              key={product.id}
              infoList={infoList}
              hashtag={product.hash}
              awards={product.awards}
            />
          );
        })}
        <div className="product-description">
          {infoList.map(product => {
            return (
              <Fragment key={product.id}>
                <div>
                  <MainDescription
                    category={product.category_name}
                    degree={product.dgree}
                    ml={product.ml}
                    expireDate={product.expire_date}
                    keep={product.keep}
                  />
                  <Tasting flavorList={flavorList} />
                </div>
                <AddToCart price={product.price} key={product.id} />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
