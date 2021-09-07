import React, { Component } from 'react';
import './Cart.scss';

import Modal from './Modal';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  componentDidMount() {
    fetch('/data/DetailTest2.json')
      .then(res => res.json())
      .then(res => this.setState({ infoList: res.Result }));
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
    console.log(this.state.isModalOpen);
  };

  handleModalClosed = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.handleModalOpen}> 장바구니 보기 </button>
        <Modal
          open={isModalOpen}
          close={this.handleModalClosed}
          title="Create a chat roozxm"
        />
      </div>
    );
  }
}
