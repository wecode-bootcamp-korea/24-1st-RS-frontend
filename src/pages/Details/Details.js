import React, { Component } from 'react';
import API from '../../config';
import './Details.scss';

import AddToCart from './AddToCart';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import Tasting from './Tasting';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    const url = `${API}/products/1`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const productInfo = res.Result;
        this.setState({ productInfo });
      });
  }

  render() {
    const { productInfo } = this.state;

    return (
      <div className="details-wrapper">
        {Object.keys(productInfo).length && (
          <ProductInfo productInfo={productInfo} />
        )}

        <div className="product-description">
          <div className="desc-left">
            {Object.keys(productInfo).length && (
              <ProductDetails productInfo={productInfo} />
            )}
            <Tasting />
          </div>
          {Object.keys(productInfo).length && (
            <AddToCart price={productInfo.price} productID={productInfo.id} />
          )}
        </div>
      </div>
    );
  }
}
