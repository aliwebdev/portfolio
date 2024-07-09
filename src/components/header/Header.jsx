import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <h3>Ali Dev.</h3>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Birinchi
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Haqimda
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt   nav__icon"></i> Ko'nikmalar
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Xizmatlar
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Ishlar
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Aloqaga
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
      </nav>
    </header>
  );
}
