import React, { Component } from 'react';
import './Cart.scss';

import Modal from './Modal';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true,
    };
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClosed = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="modal-wrapper">
        <Modal open={isModalOpen} close={this.handleModalClosed} />
      </div>
    );
  }
}
