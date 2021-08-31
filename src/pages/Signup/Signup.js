import React, { Component } from 'react';
import './Signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repassword: '',
      name: '',
      smscheck: 'off',
      emailcheck: 'off',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="signup">
        <div className="signup-navbar"></div>
        <main>
          <div className="signup-box">
            <span className="signup-pagetitle">회원가입</span>
            <img src="/images/Signup/signup-idcard.png" width="200px" />
            <span className="joinbyemail">이메일로 가입하기</span>

            <form className="signup-form">
              <div className="inputbox">
                <span className="inputname">이메일</span>
                <input
                  name="email"
                  className="signup-input"
                  placeholder="이메일을 입력해
                  주세요"
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputbox">
                <span className="inputname">비밀번호</span>
                <input
                  name="password"
                  className="signup-input"
                  placeholder="8자 이상 / 영문 / 숫자를 조합해주세요"
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputbox">
                <span className="inputname">비밀번호 확인</span>
                <input
                  name="repassword"
                  className="signup-input"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputbox">
                <span className="inputname">이름</span>
                <input
                  className="signup-input"
                  placeholder="이름을 입력해주세요"
                  onChange={this.handleInput}
                  name="name"
                />
              </div>
            </form>
            <p className="signup-rule">
              <span>이용약관</span> 및 <span>개인정보처리방침</span> 내용을
              <br /> 확인 하였으며, 이에 동의합니다.
            </p>
            <div className="signup-check">
              <span className="signup-check-agree">
                이메일 이벤트, 혜택수신 동의
              </span>
              <span className="signup-check-choice">[선택]</span>
              <input
                type="checkbox"
                id="emailcheck"
                name="emailcheck"
                onChange={this.handleInput}
              />
              <lable for="emailcheck" />
            </div>
            <div className="signup-check">
              <span className="signup-check-agree">
                SMS 이벤트, 혜택수신 동의
              </span>
              <span className="signup-check-choice">[선택]</span>
              <input
                type="checkbox"
                id="smscheck"
                name="smscheck"
                onChange={this.handleInput}
              />
            </div>
            <button className="signup-btn">가입완료</button>
          </div>
        </main>
      </div>
    );
  }
}
