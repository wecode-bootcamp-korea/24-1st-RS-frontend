import React, { Component, Fragment } from 'react';
import Features from './Features';
import SideDishes from './SideDishes';

export default class QuickView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threePoints: [],
      sideDishes: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailPoint.json')
      .then(res => res.json())
      .then(res => this.setState({ threePoints: res.Result }));

    fetch('/data/DetailSides.json')
      .then(res => res.json())
      .then(res => this.setState({ sideDishes: res.Result }));
  }

  render() {
    const { infoList, hashtag, awards } = this.props;
    const { threePoints, sideDishes } = this.state;

    return (
      <div className="quick-view">
        {infoList.map(product => {
          return (
            <Fragment key={product.id}>
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
                        <Fragment>
                          <span>{tag.caption}</span>
                        </Fragment>
                      );
                    })}
                    <span className="awards"># {awards}</span>
                  </div>
                  {threePoints.map((feature, idx) => {
                    return (
                      <Fragment key={idx}>
                        <Features
                          flavor={feature.point_flavor}
                          story={feature.point_story}
                          side={feature.point_side}
                        />
                      </Fragment>
                    );
                  })}
                  <SideDishes dishes={sideDishes} />
                  <div className="product-price">
                    <label className="price-info">판매금액 </label>
                    <span className="price">{product.price}원</span>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}
