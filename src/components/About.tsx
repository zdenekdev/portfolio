import React from "react";
import macImg from "../images/about-img.webp";
import Reveal from "./utils/Reveal";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__side-img">
            <img className="about__img" src={macImg} alt="Macbook" />
          </div>

          <div className="about__text-side">
            <div>
              <h4 className="about__heading">About me</h4>
              <h3 className="about__title">A dedicated Front-End Developer</h3>
            </div>

            <Reveal>
              <div className="about__text">
                <p className="about__text-para">
                  I'm a self taught Front-End Developer with a proficiency in
                  HTML, CSS, JavaScript, TypeScript, React, Tailwind, and SCSS.
                  Additionally, I have hands-on experience working with Redux,
                  the state management tool, and Firebase, the cloud-hosted
                  database.
                </p>
                <p className="about__text-para">
                  I've used all mentioned technologies in my projects in the{" "}
                  <a className="about__text-link" href="#projects">
                    portfolio
                  </a>{" "}
                  section.
                </p>
                <p className="about__text-para">
                  My goal is to continuously grow as a developer while deepening
                  my knowledge of front-end technologies. I would love to be a
                  valuable member of a team that is passionate about what they
                  create and consistently move forward.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
