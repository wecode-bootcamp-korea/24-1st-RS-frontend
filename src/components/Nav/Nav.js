import React, { Component } from 'react';
import './Nav.scss';
import { withRouter } from 'react-router-dom';

export default class Nav extends Component {
  goToLogin = () => {
    this.props.history.push('/login');
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
            <p className="login-btn" onClick={this.goToLogin}>
              로그인
            </p>
            <p
              className="signup-btn"
              onClick={() => {
                console.log('회원가입');
              }}
            >
              회원가입
            </p>
          </div>
        </header>
      </>
    );
  }
}
