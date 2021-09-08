import React, { Component } from 'react';
import ReviewStar from './ReviewStar';
import './NewItem.scss';
import { Link } from 'react-router-dom';
export default class NewItemCompDetail extends Component {
  render() {
    const { image, name, price, grade, hash, id } = this.props.product;
    return (
      <Link to={`/details/${id}`}>
        <div className="best-seller-card">
          <img className="best-seller-img" alt="best-img-1" src={image} />
          <div className="best-seller-desc">
            <div className="desc-wrapper">
              <p className="product-name">{name}</p>
              <p className="product-price">{price}원</p>
              {hash.map((desc, idx) => {
                return (
                  <p key={idx} className="hash">
                    {desc.caption}
                  </p>
                );
              })}
            </div>
            <div className="rating-section">
              <ReviewStar />
              <p className="rating-score">{grade}평점</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
