import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="partner">
          <ul className="info">
            <li className="footer-desc">
              <span className="policy span-style">이용약관</span>
              <span className="policy span-style">정보처리방침</span>
              <span className="policy span-style">파트너문의</span>
            </li>

            <li className="footer-desc">
              <span className="span-style">
                <b>주담화컴퍼니 주식회사</b>
              </span>
              <span className="span-style">대표: 홍길동</span>
              <span className="span-style">정보보호 책임자:아무개</span>
            </li>

            <li className="footer-desc">
              <span>서울특별시 강남구 테헤란로 427 위워크타워 3층</span>
            </li>

            <li className="footer-desc">
              <span className="span-style">
                통신판매 신고번호: 2025-서울서초-xxxx
              </span>
              <span className="span-style">대표전화: 050-0000-0000</span>
              <span className="span-style">이메일: info@naver.com</span>
            </li>

            <li className="footer-desc">
              <span>
                <strong>
                  주담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
                  등록한 상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다.
                </strong>
              </span>
            </li>

            <li className="footer-desc">
              <span className="span-style">
                고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                가입한 NICE구매안전 (에스크로)서비스를 이용하실 수 있습니다.
              </span>
              <b>서비스가입사실 확인</b>
            </li>
          </ul>
        </div>

        <div className="customer-center">
          <ul className="info-one">
            <li className="customer-num">
              <span className="span-style">고객센터: 050-0000-0000</span>
            </li>
            <li>
              <span className="span-style">평일10:00 - 18:00, 주말휴무</span>{' '}
              <br />
            </li>
          </ul>

          <ul className="info-two">
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt="insta"
                src="https://www.sooldamhwa.com/static/media/instagram-logo.c25053f3.png"
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt="youtube"
                src="data:image/png;base64,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"
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt="kakao"
                src="https://www.sooldamhwa.com/static/media/kakao-logo.f9fcb593.png"
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt="facebook"
                src="data:image/png;base64,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"
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt="naver"
                src="https://www.sooldamhwa.com/static/media/naver-logo.c4445324.png"
              />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
