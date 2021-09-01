import React, { Component } from 'react';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';
import './Signin.scss';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    fetch('http://10.58.3.176:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.ACCESS_TOKEN) {
          localStorage.setItem('login-token', response.token);
          alert('로그인이 완료되었습니다!');
          this.props.history.push('/');
        }

        if (response.MESSAGE === 'INVALID_USER') {
          alert('회원 정보와 맞지않습니다. 다시 입력해주세요');
        }

        if (response.MESSAGE === 'EMPTY_VALUE_ERROR') {
          alert('이메일과 비밀번호 모두 입력해주세요');
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
      <div className="signin">
        <div className="signin-navbar"></div>
        <main>
          <div className="signin-box">
            <span className="signin-pagetitle">로그인</span>

            <form className="signin-form">
              <div className="input-box">
                <span className="input-name">이메일</span>
                <input
                  className="signin-input"
                  name="email"
                  placeholder="이메일을 입력해주세요"
                  onChange={this.handleInput}
                />
              </div>

              <div className="input-box">
                <span className="input-name">비밀번호</span>
                <input
                  className="signin-input"
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
              회원가입(+3000p) 찾기
            </span>
          </div>
        </main>
      </div>
    );
  }
}
