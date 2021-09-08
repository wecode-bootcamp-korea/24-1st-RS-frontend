import React, { Component } from 'react';
import './Nav.scss';
import { withRouter, Link } from 'react-router-dom';

class Nav extends Component {
  goToSignIn = () => {
    this.props.history.push('/signin');
  };

  goToSignUp = () => {
    this.props.history.push('/signup');
    //localStorage.setItem('login-token', 'Tom');
  };

  logOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            alt="logo-img"
            className="logo-img"
            src="/images/Main/logoimg.png"
          />
        </Link>

        <div className="sign-group">
          {localStorage.getItem('login-token') ? (
            <p className="login-btn" onClick={this.logOut}>
              로그아웃
            </p>
          ) : (
            <>
              <p className="login-btn" onClick={this.goToSignIn}>
                로그인
              </p>
              <p className="signup-btn" onClick={this.goToSignUp}>
                회원가입
              </p>
            </>
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Nav);
