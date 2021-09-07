import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Category from './pages/Category/Category';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </Router>
    );
  }
}
