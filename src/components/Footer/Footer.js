import React, { Component } from 'react';
import FooterComp from './FooterComp';

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
                alt={FooterComp[0].alt}
                src={FooterComp[0].image}
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt={FooterComp[1].alt}
                src={FooterComp[1].image}
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt={FooterComp[2].alt}
                src={FooterComp[2].image}
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt={FooterComp[3].alt}
                src={FooterComp[3].image}
              />
            </li>
            <li className="social-img-wrapper">
              <img
                className="social-img"
                alt={FooterComp[4].alt}
                src={FooterComp[4].image}
              />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
