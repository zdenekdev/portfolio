import React from "react";
import standUp from "../images/projects/stand-up.webp";
import itunesPlaylist from "../images/projects/itunes-playlist.webp";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import nextJsLogo from "../images/nextjs.svg";
import typescriptLogo from "../images/typescript.svg";
import tailwindLogo from "../images/tailwind.svg";
import firebaseLogo from "../images/firebase.svg";
import reduxLogo from "../images/redux.svg";
import reactLogo from "../images/react.svg";
import sassLogo from "../images/sass.svg";
import { Tooltip } from "react-tooltip";

function Portfolio() {
  return (
    <div className="portfolio" id="projects">
      <div className="portfolio__container">
        <div className="portfolio__content">
          <h4 className="portfolio__heading">Portfolio</h4>
          <h3 className="portfolio__title">My web development projects</h3>
          <div className="portfolio__grid">
            <div className="portfolio__project">
              <div className="portfolio__img-container">
                <a
                  href="https://stand-up-events.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="portfolio__img"
                    src={standUp}
                    alt="project website"
                  />
                </a>
              </div>
              <div className="portfolio__text">
                <h3 className="portfolio__project-title">stand up events</h3>
                <p className="portfolio__description">
                  Search for stand up events and shows featuring your favorite
                  comedians. This web application allows you to filter events by
                  country, city, and selected date range. Additionally, You can
                  add new events and delete existing ones. <br />I have used
                  Firebase as the cloud-based database.
                </p>

                <ul className="portfolio__stack">
                  <li className="portfolio__tech">
                    <img
                      className="portfolio__tech-img"
                      src={nextJsLogo}
                      alt="next_js_logo"
                      data-tooltip-id="next"
                      data-tooltip-content="Next.js"
                    />
                    <Tooltip id="next" />
                  </li>
                  <li className="portfolio__tech">
                    <img
                      className="portfolio__tech-img"
                      src={reduxLogo}
                      alt="redux_logo"
                      data-tooltip-id="redux"
                      data-tooltip-content="Redux"
                    />
                    <Tooltip id="redux" />
                  </li>
                  <li className="portfolio__tech">
                    <img
                      className="portfolio__tech-img"
                      src={firebaseLogo}
                      alt="firebase_logo"
                      data-tooltip-id="firebase"
                      data-tooltip-content="Firebase"
                    />
                    <Tooltip id="firebase" />
                  </li>
                  <li className="portfolio__tech">
                    <img
                      className="portfolio__tech-img portfolio__tech-tailwind"
                      src={tailwindLogo}
                      alt="tailwind_logo"
                      data-tooltip-id="tailwind"
                      data-tooltip-content="Tailwind CSS"
                      data-tooltip-offset={14}
                    />
                    <Tooltip id="tailwind" />
                  </li>
                </ul>
                <div className="portfolio__links">
                  <a
                    className="portfolio__github-link"
                    href="https://github.com/zdenekdev/stand-up"
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
                    href="https://stand-up-events.vercel.app/"
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
                  href="https://itunes-playlist.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="portfolio__img"
                    src={itunesPlaylist}
                    alt="project website"
                  />
                </a>
              </div>
              <div className="portfolio__text">
                <h3 className="portfolio__project-title">iTunes playlist</h3>
                <p className="portfolio__description">
                  Search for your favorite songs, albums or interprets. This
                  simple web application utilizes iTunes search API, which
                  allows you to search through the iTunes database and play
                  snippets of your favorite songs.
                </p>
                <ul className="portfolio__stack">
                  <li className="portfolio__tech">
                    {" "}
                    <img
                      className="portfolio__tech-img"
                      src={reactLogo}
                      alt="react_logo"
                      data-tooltip-id="react"
                      data-tooltip-content="React.js"
                    />
                    <Tooltip id="react" />
                  </li>
                  <li className="portfolio__tech">
                    {" "}
                    <img
                      className="portfolio__tech-img portfolio__tech-typescript"
                      src={typescriptLogo}
                      alt="typescript_logo"
                      data-tooltip-id="ts"
                      data-tooltip-content="TypeScript"
                    />
                    <Tooltip id="ts" />
                  </li>
                  <li className="portfolio__tech">
                    {" "}
                    <img
                      className="portfolio__tech-img portfolio__tech-sass"
                      src={sassLogo}
                      alt="sass_logo"
                      data-tooltip-id="scss"
                      data-tooltip-content="SCSS"
                      k
                      data-tooltip-offset={8}
                    />
                    <Tooltip id="scss" />
                  </li>
                </ul>
                <div className="portfolio__links">
                  <a
                    className="portfolio__github-link"
                    href="https://github.com/zdenekdev/itunes-playlist"
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
                    href="https://itunes-playlist.vercel.app/"
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
