import React, { Component } from 'react';
import Features from './Features';

export default class QuickView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threePoints: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailPoint.json')
      .then(res => res.json())
      .then(res => this.setState({ threePoints: res.Result }));
  }

  render() {
    const { infoList, hashtag, awards } = this.props;
    const { threePoints } = this.state;

    return (
      <div className="product-info">
        {infoList.map(product => {
          return (
            <>
              <div className="product-name">{product.name}</div>
              <div className="rates">평점: {product.grade}</div>
              <div className="marketing-point">
                <div className="main-img">
                  <img alt="main-img" src={product.image} />
                </div>
                <div className="quick-info">
                  <div className="tags">
                    {hashtag.map((tag, idx) => {
                      return (
                        <span className="hashtag" key={idx}>
                          {tag.caption}
                        </span>
                      );
                    })}
                    <span># {awards}</span>
                  </div>
                  {threePoints.map(feature => {
                    return (
                      <Features
                        flavor={feature.point_flavor}
                        story={feature.point_story}
                        side={feature.point_side}
                      />
                    );
                  })}
                  <div className="product-price">
                    <label className="price-info">판매금액</label>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
