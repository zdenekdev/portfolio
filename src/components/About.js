import React from "react";
import macImg from "../images/about-img.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__side-img">
            <img className="about__img" src={macImg} alt="Macbook" />
          </div>
          <div className="about__text-side">
            <h4 className="about__heading">About me</h4>
            <h3 className="about__title">A dedicated Front-End Developer</h3>
            <div className="about__text">
              <p className="about__text-para">
                I'm a self taught Front-End Developer with a proficiency in
                HTML, CSS, JavaScript, TypeScript, React, Tailwind, and SCSS.
                Additionally, I have hands-on experience working with Redux, the
                state management tool, and Firebase, the cloud-hosted database.
              </p>
              <p className="about__text-para">
                I've used all mentioned technologies in my projects in portfolio
                section.
              </p>
              {/* <p className="about__text-para">
                I am passionate about front-end development and always eager to
                learn and explore new technologies to enhance my skills further.
              </p> */}
              <p className="about__text-para">
                {/* My goal is to continuously grow as a developer and be valuable team member.
                deepen my knowledge of  */}
                My goal is to continuously grow as a developer while deepening
                my knowledge of front-end technologies. I would love to be a
                valuable member of the team that is passionate about what they
                create and consistently move forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
