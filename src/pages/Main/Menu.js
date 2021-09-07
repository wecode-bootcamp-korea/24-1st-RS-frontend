import React, { Component } from 'react';
import MenuDetail from './MenuDetail';
import MENU_DATA from './MENU_DATA';

export default class Menu extends Component {
  render() {
    return (
      <section className="menu-bar">
        {MENU_DATA.map((menu, idx) => {
          return <MenuDetail key={idx} Menu={menu} />;
        })}
      </section>
    );
  }
}
