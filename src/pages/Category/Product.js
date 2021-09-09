import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';
import Reviewstar from './Reviewstar';
import { Route } from 'react-router';

class Product extends Component {
  render() {
    return (
      <Link
        to={`/category/details/${this.props.id}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="product">
          <div className="product-image">
            <img alt="product-image" src={this.props.image} />
            <div className="product-back">
              <div className="product-back-contents">
                <p className="product-back-degree">
                  #도수는_{this.props.dgree}
                </p>
                <p className="product-back-side-dish">#함께_즐기면_더_좋아요</p>
                <div className="product-back-side-dish-wrap">
                  {this.props.side_dish.map(idx => {
                    return (
                      <div className="product-back-side-dish-list">
                        <img
                          alt="side-dish-image"
                          key={idx}
                          src={idx.image_url}
                        />
                        <span className="side-dish-text" key={idx}>
                          {idx.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="product-text">
            <p className="product-name">{this.props.name}</p>
            <p className="product-price">{this.props.price}원</p>
            <ul className="product-description">
              {this.props.hash.map(idx => {
                return (
                  <li className="product-hash" key={idx}>
                    {idx.caption}
                  </li>
                );
              })}
            </ul>
            <div className="product-review">
              <Reviewstar />
              <p className="product-rate">{this.props.grade}평점</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Product;
