//update 전
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

  handleJoin = () => {
    fetch('http://10.58.3.176:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        repassword: this.state.repassword,
        name: this.state.name,
        smscheck: this.state.smscheck,
        emailcheck: this.state.emailcheck,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          alert('회원가입이 완료되었습니다!');
        }

        if (response.MESSAGE === 'EMPTY_VALUE_ERROR') {
          alert('회원가입을 위해 모든 값을 입력해주세요.');
        }

        if (response.MESSAGE === 'EMAIL_VALIDATION_ERROR') {
          alert('이메일을 형식에 맞춰 입력해주세요.');
        }

        if (response.MESSAGE === 'DUPLICATION_ERROR') {
          alert('이미 존재하는 회원정보입니다.');
        }

        if (response.MESSAGE === 'PASSWORD_VALIDATION_ERROR') {
          alert(
            '비밀번호를 확인해주세요. 비밀번호는 8자 이상, 문자/숫자/특수문자를 포함해야 합니다.'
          );
        }

        if (response.MESSAGE === 'PASSWORD_DO_NOT_MATCH_ERROR') {
          alert('입력하신 비밀번호가 불일치합니다.');
        }
      });
  };

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
            <img
              src="/images/Signup/signup-idcard.png"
              alt="id-card"
              width="200px"
            />
            <span className="join-by-email">이메일로 가입하기</span>

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
                  type="password"
                  className="signup-input"
                  placeholder="문자/숫자/특수문자 포함 8자 이상 입력해주세요"
                  onChange={this.handleInput}
                />
              </div>
              <div className="inputbox">
                <span className="inputname">비밀번호 확인</span>
                <input
                  name="repassword"
                  type="password"
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
            <button className="signup-btn" onClick={this.handleJoin}>
              가입완료
            </button>
          </div>
        </main>
      </div>
    );
  }
}
