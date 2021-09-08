import React, { Component } from 'react';
import './Nav.scss';
import { withRouter, Link } from 'react-router-dom';

class LoggedIn extends Component {
  loggedOut = () => {
    localStorage;.removeItem(TOKEN_KEY);
    this.props.history.push('/');
  };

  render(){
    const token = localStorage.getItem(TOKEN_KEY);
    return (
      

    )
  }
}
