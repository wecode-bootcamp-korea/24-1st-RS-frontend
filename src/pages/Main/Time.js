import React from 'react';
import CountDown from './CountDown';

export default class Time extends React.Component {
  render() {
    return (
      <div className="time-section">
        <div className="product-img-wrapper">
          <img
            className="product-img"
            alt="random-drink-img"
            src="/images/Main/randomdrink.png"
          />
        </div>
        <div className="time-wrapper">
          <img
            className="clock-img"
            alt="clock-img"
            src="/images/Main/clock.png"
          />
          <p className="time-now">특가 까지 남은 시간!</p>
          <div className="time">
            <CountDown />
          </div>
        </div>
      </div>
    );
  }
}
