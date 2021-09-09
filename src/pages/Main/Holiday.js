import React from 'react';

export default class Holiday extends React.Component {
  render() {
    return (
      <div className="holiday">
        <img
          alt="rice-cake"
          className="rice-cake"
          src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/UvKA-1630300821082-chuseok-icon.png"
        />
        <div className="holiday-comment-section">
          <span className="holiday-comment">
            즐거운 한가위 되세요! 프로젝트 수고 하셨습니다
          </span>
        </div>
        <div className="our-drink-section">
          <span className="our-drink">한가위를 더욱 풍성하게 해줄 우리술</span>
          <img
            alt="gift-box"
            className="gift-box"
            src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/ZHYE-1630300717672-sale-gift-icon.png"
          />
        </div>
      </div>
    );
  }
}
