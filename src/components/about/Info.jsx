import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Tajriba</h3>
        <span className="about__subtitle">
          2 yildan beri ishdan kelmaydi...
        </span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Yakunladi</h3>
        <span className="about__subtitle">10dan oshiq loyihalar...</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Murojaat</h3>
        <span className="about__subtitle">48/7...</span>
      </div>
    </div>
  );
};

export default Info;
