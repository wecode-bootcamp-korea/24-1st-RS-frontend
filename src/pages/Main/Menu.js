import React, { Component } from 'react';
import MenuDetail2 from './MenuDetail2';
import MENU_DATA from './MENU_DATA';

export default class Menu extends Component {
  render() {
    return (
      <section className="menu-bar">
        {MENU_DATA.map((menu, idx) => {
          return <MenuDetail2 key={idx} Menu={menu} />;
        })}
      </section>
    );
  }
}
