import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import htmlLogo from "../images/html.svg";
import cssLogo from "../images/css.svg";
import javascriptLogo from "../images/javascript.svg";
import reactLogo from "../images/react.svg";
import tailwindLogo from "../images/tailwind.svg";
import sassLogo from "../images/sass.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__title">Front-End Developer</h1>
              <p className="hero__intro">
                Hi, I'm Zdenek Kucera. A passionate Front-end Developer based in
                Brno, Czech Republic. 📍
              </p>
              <span className="hero__icons">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="#"
                >
                  <i>
                    <FontAwesomeIcon
                      className="hero__in-icon"
                      icon={faLinkedin}
                    />
                  </i>
                </a>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href=""
                >
                  <i>
                    <FontAwesomeIcon
                      className="hero__github-icon"
                      icon={faGithub}
                    />
                  </i>
                </a>
              </span>
            </div>
            <div className="hero__img"></div>
          </div>
          <div className="hero__skills">
            <p className="hero__skills-text">Tech Stack</p>
            <div className="hero__logos">
              <ul className="hero__logos-list">
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={htmlLogo}
                    alt="html5_logo"
                    title="HTML5"
                  />
                </li>
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={cssLogo}
                    alt="css3_logo"
                    title="CSS3"
                  />
                </li>
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={javascriptLogo}
                    alt="javascript_logo"
                    title="Javascript"
                  />
                </li>
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={reactLogo}
                    alt="react_js_logo"
                    title="React JS"
                  />
                </li>
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={tailwindLogo}
                    alt="tailwind_css_logo"
                    title="Tailwind CSS"
                  />
                </li>
                <li className="hero__logo">
                  <img
                    className="hero__logo-img"
                    src={sassLogo}
                    alt="sass_logo"
                    title="Sass/Scss"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
