import React, { Component } from 'react';
import './Signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="signup">
        <div className="signup-navbar"></div>
        <main>
          <div className="signup-box">
            <span className="signup-pagetitle">회원가입</span>
            <img src="/images/signup-idcard.png" width="200px"></img>
            <span className="joinbyemail">이메일로 가입하기</span>

            <form className="signup-form">
              <div className="inputbox">
                <span className="inputname">이메일</span>
                <input
                  className="signup-input"
                  placeholder="이메일을 입력해
                  주세요"
                />
              </div>
              <div className="inputbox">
                <span className="inputname">비밀번호</span>
                <input
                  className="signup-input"
                  placeholder="8자 이상 / 영문 / 숫자를 조합해주세요"
                />
              </div>
              <div className="inputbox">
                <span className="inputname">비밀번호 확인</span>
                <input
                  className="signup-input"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </div>
            </form>
            <button className="signup-btn">가입완료</button>
          </div>
        </main>
      </div>
    );
  }
}
