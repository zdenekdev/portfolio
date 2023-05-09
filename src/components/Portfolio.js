import React from "react";
import mrCake from "../images/mrcake.webp";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div className="portfolio" id="projects">
      <div className="portfolio__container">
        <div className="portfolio__content">
          <h4 className="porfolio__heading">Portfolio</h4>
          <div className="portfolio__grid">
            <div className="portfolio__project">
              <div className="portfolio__img-container">
                <a
                  href="http://www.mrcake.cz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="portfolio__img"
                    src={mrCake}
                    alt="project website"
                  />
                </a>
              </div>
              <div className="portfolio__text">
                <h3 className="portfolio__title">Car rental</h3>
                <p className="portfolio__description">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <p className="portfolio__stack">
                  <span className="portfolio__tech">React</span>
                  <span className="portfolio__tech">SCSS</span>
                </p>
                <div className="portfolio__links">
                  <a
                    className="portfolio__github-link"
                    href="http://"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <i>
                      <FontAwesomeIcon
                        className="portfolio__github-icon"
                        icon={faGithub}
                      />
                    </i>
                  </a>
                  <a
                    className="portfolio__demo-link"
                    href="http://"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <i>
                      <FontAwesomeIcon
                        className="portfolio__arrow-icon"
                        icon={faArrowUpRightFromSquare}
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio__project">
              <div className="portfolio__img-container">
                <a
                  href="http://www.mrcake.cz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="portfolio__img"
                    src={mrCake}
                    alt="project website"
                  />
                </a>
              </div>
              <div className="portfolio__text">
                <h3 className="portfolio__title">Car rental</h3>
                <p className="portfolio__description">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <p className="portfolio__stack">
                  <span className="portfolio__tech">React</span>
                  <span className="portfolio__tech">SCSS</span>
                </p>
                <div className="portfolio__links">
                  <a
                    className="portfolio__github-link"
                    href="http://"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <i>
                      <FontAwesomeIcon
                        className="portfolio__github-icon"
                        icon={faGithub}
                      />
                    </i>
                  </a>
                  <a
                    className="portfolio__demo-link"
                    href="http://"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <i>
                      <FontAwesomeIcon
                        className="portfolio__arrow-icon"
                        icon={faArrowUpRightFromSquare}
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
