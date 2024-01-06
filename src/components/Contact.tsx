import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Reveal from "./utils/Reveal";
import ContactForm from "./ContactForm";

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
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </span>
                <div className="contact__info">
                  <a
                    className="contact__details"
                    href="mailto:kucera.contact@gmail.com">
                    kucera.contact@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__icon-box">
                <span className="contact__icon">
                  <i className="contact__phone-icon">
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </i>
                </span>
                <div className="contact__info">
                  <a className="contact__details" href="tel:+420608966345">
                    +420 608 966 345
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
