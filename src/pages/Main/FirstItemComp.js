import React from 'react';
import ReviewStar from './ReviewStar';
import './BestItem.scss';

export const FirstItemComp = props => {
  const { image, name, price, hash, grade } = props.product;
  return (
    <div className="first-item-card">
      <img className="first-item-img" alt="best-img-1" src={image} />
      <div className="first-item-desc">
        <div className="desc-wrapper">
          <p className="product-name">{name}</p>
          <p className="product-price">{price}원</p>
          {hash.map((desc, idx) => {
            return (
              <p className="hash" key={idx}>
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
  );
};
