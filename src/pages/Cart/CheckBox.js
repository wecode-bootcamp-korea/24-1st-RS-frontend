import React, { Component } from 'react';

export default class CheckBox extends Component {
  render() {
    const { isChecked, handleChechbox } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className="select-box"
          onClick={handleChechbox}
        />
      </>
    );
  }
}
