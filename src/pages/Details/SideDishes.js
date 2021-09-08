import React, { Component } from 'react';
import API from '../../config';

export default class SideDishes extends Component {
  state = {
    sideDishes: [],
  };

  componentDidMount() {
    fetch(`${API}/products/1/sidedishes`)
      .then(res => res.json())
      .then(res => {
        const sideDishes = res.Result;

        this.setState({ sideDishes });
      });
  }

  render() {
    const { sideDishes } = this.state;

    return (
      <div className="sides-all">
        {sideDishes.map((dish, idx) => {
          return (
            <div className="sidedishes" key={idx}>
              <img alt="sidedishes" src={dish.image_url} />
              <label>{dish.name}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
