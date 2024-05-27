import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import htmlLogo from "../images/html.svg";
import cssLogo from "../images/css.svg";
import javascriptLogo from "../images/javascript.svg";
import phpLogo from "../images/php.svg";
import typescriptLogo from "../images/typescript.svg";
import reactLogo from "../images/react.svg";
import tailwindLogo from "../images/tailwind.svg";
import sassLogo from "../images/sass.svg";
import bootstrapLogo from "../images/bootstrap.svg";
import nextJsLogo from "../images/nextjs.svg";
import reduxLogo from "../images/redux.svg";
import { Tooltip } from "react-tooltip";
import Reveal from "./utils/Reveal";
import RevealSlower from "./utils/RevealSlower";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <Reveal>
                <h1 className="hero__title">Web Developer</h1>
              </Reveal>
              <RevealSlower>
                <p className="hero__intro">
                  Hi, I'm Zdenek Kucera, a passionate junior web developer based
                  in Brno, Czech Republic. 📍
                </p>
              </RevealSlower>
              <RevealSlower>
                <span className="hero__icons">
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/kucerazdenek/">
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
                    href="https://github.com/zdenekdev">
                    <i>
                      <FontAwesomeIcon
                        className="hero__github-icon"
                        icon={faGithub}
                      />
                    </i>
                  </a>
                </span>
              </RevealSlower>
            </div>
            <Reveal>
              <div className="hero__img"></div>
            </Reveal>
          </div>
          <RevealSlower>
            <div className="hero__skills">
              <p className="hero__skills-text">Tech Stack</p>

              <div className="hero__logos">
                <ul className="hero__logos-list">
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img"
                      src={htmlLogo}
                      alt="html5_logo"
                      data-tooltip-id="html"
                      data-tooltip-content="HTML5"
                    />
                    <Tooltip id="html" />
                  </li>
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img"
                      src={cssLogo}
                      alt="css3_logo"
                      data-tooltip-id="css"
                      data-tooltip-content="CSS3"
                    />
                    <Tooltip id="css" />
                  </li>
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img"
                      src={javascriptLogo}
                      alt="javascript_logo"
                      data-tooltip-id="js"
                      data-tooltip-content="JavaScript"
                    />
                    <Tooltip id="js" />
                  </li>
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-php"
                      src={phpLogo}
                      alt="php_logo"
                      data-tooltip-id="php"
                      data-tooltip-content="PHP"
                    />
                    <Tooltip id="php" />
                  </li>
                  {/* <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-typescript"
                      src={typescriptLogo}
                      alt="typescript_logo"
                      data-tooltip-id="ts"
                      data-tooltip-content="TypeScript"
                    />
                    <Tooltip id="ts" />
                  </li> */}
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-react"
                      src={reactLogo}
                      alt="react_js_logo"
                      data-tooltip-id="react"
                      data-tooltip-content="React.js"
                    />
                    <Tooltip id="react" />
                  </li>
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-redux"
                      src={reduxLogo}
                      alt="react_js_logo"
                      data-tooltip-id="redux"
                      data-tooltip-content="Redux"
                    />
                    <Tooltip id="redux" />
                  </li>
                  {/* <li className="hero__logo">
                    <img
                      className="hero__logo-img"
                      src={nextJsLogo}
                      alt="next_js_logo"
                      data-tooltip-id="next"
                      data-tooltip-content="Next.js"
                    />
                    <Tooltip id="next" />
                  </li> */}
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-tailwind"
                      src={tailwindLogo}
                      alt="tailwind_css_logo"
                      data-tooltip-id="tailwind"
                      data-tooltip-content="Tailwind CSS"
                      data-tooltip-offset={13}
                    />
                    <Tooltip id="tailwind" />
                  </li>
                  {/* <li className="hero__logo">
                    <img
                      className="hero__logo-img"
                      src={sassLogo}
                      alt="sass_logo"
                      data-tooltip-id="sass"
                      data-tooltip-content="Sass/SCSS"
                      data-tooltip-offset={8}
                    />
                    <Tooltip id="sass" />
                  </li> */}
                  <li className="hero__logo">
                    <img
                      className="hero__logo-img hero__logo-bootstrap"
                      src={bootstrapLogo}
                      alt="bootstrap_logo"
                      data-tooltip-id="bootstrap"
                      data-tooltip-content="Bootstrap"
                      data-tooltip-offset={8}
                    />
                    <Tooltip id="bootstrap" />
                  </li>
                </ul>
              </div>
            </div>
          </RevealSlower>
        </div>
      </div>
    </section>
  );
}

export default Hero;
