import React, { Component } from 'react';
import ReadyToBuy from './ReadyToBuy';

export default class Modal extends Component {
  render() {
    const { open, close, header } = this.props;

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open && (
          <section>
            <header className="header">
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <ReadyToBuy />
              <div className="total-sum">
                <label>현재 총 구매가격:</label>
                <span>total sum</span>
              </div>
            </main>
            <footer>
              <button className="close" onClick={close}>
                계속 쇼핑하기
              </button>
              <button className="close" onClick={close}>
                결제하기
              </button>
            </footer>
          </section>
        )}
      </div>
    );
  }
}
