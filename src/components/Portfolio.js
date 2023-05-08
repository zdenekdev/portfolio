import React from "react";
import mrCake from "../images/mrcake.webp";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__content">
          <h4>Portfolio</h4>
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
                <h3>Car rental</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
