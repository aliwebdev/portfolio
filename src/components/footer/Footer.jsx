import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container contain">
        <h1 className="footer__title">Ali Dev.</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Haqimda
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Ishlar
            </a>
          </li>
          <li>
            <a href="#!" className="footer__link">
              Xizmatlar
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/alidevuz"
            className="footer__social-link"
            target="blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.t.me/alidev1"
            className="footer__social-link"
            target="blank"
          >
            <i className="uil uil-telegram"></i>
          </a>

          <a
            href="https://www.github.com/aliwebdev"
            className="footer__social-link"
            target="blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <div className="footer__copy">
          &#169; AliDev. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
