import React, { Component } from 'react';
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
    fetch('/data/DetailTest2.json')
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
          <AddToCart price={productInfo.price} key={productInfo.id} />
        </div>
      </div>
    );
  }
}
