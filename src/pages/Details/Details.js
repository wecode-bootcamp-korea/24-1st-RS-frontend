import React, { Component } from 'react';
import './Details.scss';

import AddToCart from './AddToCart';
import Brief from './Brief';
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
    const { infoList, flavorList } = this.state;

    return (
      <div className="details-wrapper">
        <div className="product-info">
          {infoList.map(product => {
            return (
              <Brief
                key={product.id}
                name={product.name}
                price={product.price}
                size={product.ml}
                dscr={product.tiny_description}
                degree={product.dgree}
                expireDate={product.expire_date}
                keep={product.keep}
                category={product.category}
                mainImage={product.image}
                hashtag={product.hash}
              />
            );
          })}
          <div className="info-detail-wrapper">
            {flavorList.map(flavor => {
              return (
                <Flavor
                  key={flavor.flavor_id}
                  flavor={flavor.flavor_name}
                  point={flavor.point}
                />
              );
            })}
            <div className="parallax-section">
              <article>Company Name</article>
            </div>
          </div>
          <div className="recommend-wrapper">다른 제품 보기</div>
        </div>
        {infoList.map(product => {
          return <AddToCart price={product.price} key={product.id} />;
        })}
      </div>
    );
  }
}
