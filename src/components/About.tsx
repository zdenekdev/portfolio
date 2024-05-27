import React from "react";
import macImg from "../images/about-img.webp";
import Reveal from "./utils/Reveal";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__side-img">
            <Reveal>
              <img className="about__img" src={macImg} alt="Macbook" />
            </Reveal>
          </div>

          <div className="about__text-side">
            <Reveal>
              <div>
                <h4 className="about__heading">About me</h4>
                <h3 className="about__title">An enthusiastic Web Developer</h3>
              </div>
            </Reveal>
            <Reveal>
              <div className="about__text">
                <p className="about__text-para">
                  I'm a self taught web developer with a proficiency in HTML,
                  CSS, JavaScript, React, Tailwind, Bootstrap and a bit of PHP.
                  Additionally, I have hands-on experience working with
                  Wordpress, Redux (a state management tool), and Firebase (a
                  cloud-hosted database).
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
                  my knowledge of full stack technologies. I would love to be a
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
