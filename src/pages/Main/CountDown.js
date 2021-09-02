import React from 'react';

class CountDown extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 80,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      } else {
        if (this.state.minutes > 0) {
          this.setState({ minutes: this.state.minutes - 1 });
          this.setState({ seconds: 59 });
        }
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          if (this.state.hours === 0) {
            clearInterval(this.myInterval);
          } else {
            this.setState({ hours: this.state.hours - 1 });
            this.setState({ minutes: 59 });
            this.setState({ seconds: 59 });
          }
        }
      }
    }, 1000);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default CountDown;
