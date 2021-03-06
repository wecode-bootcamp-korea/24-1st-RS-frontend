import React, { Component } from 'react';
import { withRouter } from 'react-router';
import API from '../../config';

class Tasting extends Component {
  state = {
    flavors: [],
  };

  componentDidMount() {
    fetch(`${API}/products/${this.props.match.params.id}/flavors`)
      .then(res => res.json())
      .then(res => {
        const flavors = res.Result;

        this.setState({ flavors });
      });
  }

  render() {
    const { flavors } = this.state;

    return (
      <div className="tasting-info">
        <label>전통주 테이스팅</label>
        <div className="tasting-card-all">
          {flavors.map((flavor, idx) => {
            return (
              <div className="flavor-card" key={idx}>
                <label className="flavor">{flavor.flavor_name}</label>
                <span className="flavor-points">{flavor.point}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Tasting);
