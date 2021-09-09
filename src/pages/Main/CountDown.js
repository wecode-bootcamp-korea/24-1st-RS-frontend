import React from 'react';

class CountDown extends React.Component {
  constructor() {
    super();

    const timer = JSON.parse(localStorage.getItem('time'));

    this.state = timer
      ? timer
      : {
          hours: 100,
          minutes: 0,
          seconds: 0,
        };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const { seconds, minutes, hours } = this.state;

      const updateTime = next => this.setState(next, this.updateStorage);
      if (seconds > 0) {
        updateTime({ seconds: seconds - 1 });
      } else if (minutes > 0) {
        updateTime({ minutes: minutes - 1, seconds: 59 });
      } else if (hours > 0) {
        updateTime({
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else {
        clearInterval(this.timer);
        localStorage.removeItem('time');
      }
    }, 1000);
  };

  updateStorage = () => {
    localStorage.setItem('time', JSON.stringify(this.state));
  };

  render() {
    const { hours: hour, minutes, seconds } = this.state;
    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;

    return <div>{`${hour}:${min}:${sec}`}</div>;
  }
}

export default CountDown;
