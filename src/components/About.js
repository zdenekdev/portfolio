import React from "react";
import macImg from "../images/about-img.webp";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__img-side">
            <img className="about__img" src={macImg} alt="Macbook" />
          </div>
          <div className="about__text-side">
            <h4 className="about__heading">About me</h4>
            <h3 className="about__title">
              A dedicated Front-end Developer
              <br /> based in Belgrade, Serbia 📍
            </h3>
            <p className="about__text">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
