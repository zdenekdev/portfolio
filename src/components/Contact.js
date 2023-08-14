import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Reveal from "./utils/Reveal";

function Contact() {
  return (
    <section className="contact" id="contacts">
      <div className="contact__container">
        <div className="contact__content">
          <Reveal>
            <div className="contact__headline">
              <h4 className="contact__heading">Contact</h4>
              <h3 className="contact__title">Get in touch with me</h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span className="contact__icon">
                  <i className="contact__email-icon">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </i>
                </span>
                <div className="contact__info">
                  <h3>E-mail</h3>
                  <p className="contact__details">kucera.contact@gmail.com</p>
                </div>
              </div>
              <div className="contact__icon-box">
                <span className="contact__icon">
                  <i className="contact__phone-icon">
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </i>
                </span>
                <div className="contact__info">
                  <h3>Phone</h3>
                  <p className="contact__details">+420 608 966 345</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
