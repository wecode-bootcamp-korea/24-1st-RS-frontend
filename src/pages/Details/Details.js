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
          <ProductInfo
            key={productInfo.id}
            hashtag={productInfo.hash}
            awards={productInfo.awards}
            name={productInfo.name}
            grade={productInfo.grade}
            image={productInfo.image}
            price={productInfo.price}
          />
        )}

        <div className="product-description">
          <div className="desc-left">
            {Object.keys(productInfo).length && (
              <ProductDetails
                category={productInfo.category_name}
                degree={productInfo.dgree}
                ml={productInfo.ml}
                expireDate={productInfo.expire_date}
                keep={productInfo.keep}
              />
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
