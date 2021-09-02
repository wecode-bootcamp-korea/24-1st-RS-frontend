import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './Nav.scss';
import { withRouter } from 'react-router-dom';

export default class Nav extends Component {
  goToSignIn = () => {
    this.props.history.push('/signin');
  };

  goToSignUp = () => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <>
        <header className="header">
          <img
            alt="logo-img"
            className="logo-img"
            src="/images/Main/logoimg.png"
          />

          <div className="sign-group">
            <p className="login-btn" onClick={this.goToSignIn}>
              로그인
            </p>
            <p className="signup-btn">
              <Link to="/signup">회원가입</Link>
            </p>
          </div>
        </header>
      </>
    );
  }
}
