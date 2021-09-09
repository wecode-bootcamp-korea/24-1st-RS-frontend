import React, { Component } from 'react';
import MenuDetail from './MenuDetail';
//import MENU_DATA from './MENU_DATA';

export default class Menu extends Component {
  render() {
    console.log(this.props);
    const { category } = this.props;
    return (
      <section className="menu-bar">
        {category.map((menu, idx) => {
          return <MenuDetail key={idx} menu={menu} />;
        })}
      </section>
    );
  }
}
