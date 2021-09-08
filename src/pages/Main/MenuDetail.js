import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MenuDetail extends Component {
  goToCatergory = () => {
    this.props.history.push(`/category/${this.props.menu.id}`);
  };

  render() {
    const { image_url, name, id } = this.props.menu;
    return (
      <div className="menu">
        <img
          alt={`img${id}`}
          className="menu-image"
          src={image_url}
          title="asd"
          onClick={this.goToCatergory}
          name={name}
        />
        <label className="category-name">{name}</label>
      </div>
    );
  }
}

export default withRouter(MenuDetail);
