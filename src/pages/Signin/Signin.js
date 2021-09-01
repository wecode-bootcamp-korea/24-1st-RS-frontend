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

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
                  onChange={this.handleInput}
                />
              </div>
            </form>

            <button className="signin-btn">로그인</button>
            <KakaoButton />
            <NaverButton />
            <GoogleButton />
            <span className="find-account">아이디 찾기</span>
            <span className="find-account">비밀번호 찾기</span>
            <span className="join-account">회원가입(+3000p) 찾기</span>
          </div>
        </main>
      </div>
    );
  }
}
//
