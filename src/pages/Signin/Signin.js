import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';
import API from '../../config.js';
import './Signin.scss';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    fetch(`${API}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        const alertMessages = {
          SUCCESS: '로그인이 완료되었습니다!',
          INVALID_USER: '회원 정보와 맞지않습니다. 다시 입력해주세요',
          EMPTY_VALUE_ERROR: '이메일과 비밀번호 모두 입력해주세요',
        };

        alert(alertMessages[response.MESSAGE]);

        if (response.ACCESS_TOKEN) {
          localStorage.setItem('login-token', response.ACCESS_TOKEN);
          this.props.history.push('/');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleMoveToSignup = e => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <>
        <div className="signin">
          <div className="signin-navbar"></div>
          <main>
            <div className="signin-box">
              <span className="signin-pagetitle">로그인</span>

              <form className="signin-form">
                <div className="input-box">
                  <span className="input-name">이메일</span>
                  <input
                    className={
                      !this.state.email ? 'signin-input' : 'signin-input-done'
                    }
                    name="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={this.handleInput}
                  />
                </div>

                <div className="input-box">
                  <span className="input-name">비밀번호</span>
                  <input
                    className={
                      !this.state.password
                        ? 'signin-input'
                        : 'signin-input-done'
                    }
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    type="password"
                    onChange={this.handleInput}
                  />
                </div>
              </form>

              <button className="signin-btn" onClick={this.handleLogin}>
                로그인
              </button>
              <KakaoButton />
              <NaverButton />
              <GoogleButton />
              <span className="find-account">아이디 찾기</span>
              <span className="find-account">비밀번호 찾기</span>
              <span className="join-account" onClick={this.handleMoveToSignup}>
                회원가입(+3000p) 하기
              </span>
            </div>
          </main>
        </div>
      </>
    );
  }
}
export default withRouter(Signin);
