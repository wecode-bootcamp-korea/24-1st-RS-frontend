import React, { Component } from 'react';
import './Details.scss';

import AddToCart from './AddToCart';
import Brief from './Brief';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoList: [],
      hashtag: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailTest2.json')
      .then(res => res.json())
      .then(res => this.setState({ infoList: res }));
  }

  render() {
    return (
      <div className="details-wrapper">
        <div className="product-info">
          {this.state.infoList.map(
            ({
              id,
              name,
              price,
              ml,
              tiny_description,
              dgree,
              expire_date,
              keep,
              category_name,
              image,
              hash,
            }) => {
              return (
                <Brief
                  key={id}
                  name={name}
                  price={price}
                  size={ml}
                  dscr={tiny_description}
                  degree={dgree}
                  expireDate={expire_date}
                  keep={keep}
                  category={category_name}
                  mainImage={image}
                  hashtag={hash}
                />
              );
            }
          )}
          <div className="info-detail-wrapper">
            <div className="flavor-card">
              <label className="flavor"> 바디감 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor">고소한 향 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 화사한 향 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 매운맛 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="flavor-card">
              <label className="flavor"> 맛의강도 </label>
              <progress className="gage" value="20" max="100" />
            </div>
            <div className="parallax-section">
              <article>Company Name</article>
            </div>
          </div>
          <div className="recommend-wrapper">다른 제품 보기</div>
        </div>
        <AddToCart />
      </div>
    );
  }
}
