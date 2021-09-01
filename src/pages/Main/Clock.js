import React from 'react';
import './Main.scss';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  currentTime() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Clock;
