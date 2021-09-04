import React, { Component } from 'react';

class MainText extends Component {
  render() {
    return (
      <div className="main-text">
        <span className="category-main-text">{this.props.main.name}</span>
        <span className="category-main-desc">
          {this.props.main.description}
        </span>
      </div>
    );
  }
}

export default MainText;
