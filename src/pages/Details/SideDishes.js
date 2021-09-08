import React, { Component } from 'react';

export default class SideDishes extends Component {
  state = {
    sideDishes: [],
  };

  componentDidMount() {
    fetch('http://10.58.1.135:8000/products/4/sidedishes')
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
