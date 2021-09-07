import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MenuDetail extends Component {
  goToCatergory = () => {
    this.props.history.push(`/category/${this.props.Menu.name}`);
  };

  render() {
    const { alt, image, title, name } = this.props.Menu;
    return (
      <div className="menu">
        <img
          alt={alt}
          className="menu-image"
          src={image}
          title={title}
          onClick={this.goToCatergory}
          name={name}
        />
        <label className="category-name">{name}</label>
      </div>
    );
  }
}

export default withRouter(MenuDetail);
