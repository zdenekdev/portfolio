import React, { CSSProperties, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import emailIcon from "../../src/images/email.webp";
import { AnimatePresence, motion } from "framer-motion";

type formInputs = {
  user_name: string;
  user_email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formInputs>();
  const form = useRef<HTMLFormElement>(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [formButton, setFormButton] = useState("Send");
  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState(true);
  const [formDisplayed, setFormDisplayed] = useState(false);
  const override: CSSProperties = {
    position: "absolute",
    right: "0.7rem",
  };

  const sendEmail = () => {
    setButtonDisabled(true);
    setFormButton("Processing...");
    setLoading(true);
    setActiveForm(false);

    emailjs
      .sendForm(
        "service_bmtqgw4",
        "template_xz1nq4q",
        form.current as HTMLFormElement,
        "OcZLgXNyVy6jnKdjG"
      )
      .then(
        () => {
          setLoading(false);
          form.current!.reset();
          setFormDisplayed(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="contactForm"
      style={{
        height: formDisplayed ? "fit-content" : "27.3rem",
      }}>
      <AnimatePresence>
        {!formDisplayed && (
          <motion.div
            key="modal-msg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0 }}
            className="contactForm__thank-you-msg">
            <img
              className="contactForm__email-icon"
              src={emailIcon}
              alt="email_icon"
            />
            <div>
              <h3 className="contactForm__thank-you-msg-heading">Thank you!</h3>
              <div className="contactForm__thank-you-msg-text">
                <p>Your message has been received.</p>
                <p>I will get back to you shortly.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence> */}
      {formDisplayed && (
        <motion.div
          key="modal-container"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          className="contactForm__container">
          <h3 className="contactForm__heading">Contact form</h3>
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="contactForm__formular">
            <div
              className="contactForm__name"
              style={{
                opacity: activeForm ? "" : "0.3",
              }}>
              <label htmlFor="user_name">Your name</label>
              <input
                {...register("user_name", {
                  required: "Your name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  maxLength: {
                    value: 35,
                    message: "Name must be at most 35 characters long",
                  },
                })}
                type="text"
                name="user_name"
                id="user_name"
                className="contactForm__name-input"
              />
              {errors.user_name?.message ? (
                <div className="contactForm__error-msg">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  <p>{errors.user_name?.message as string}</p>
                </div>
              ) : null}
            </div>
            <div
              className="contactForm__email"
              style={{
                opacity: activeForm ? "" : "0.3",
              }}>
              <label htmlFor="user_email">Your email</label>
              <input
                {...register("user_email", {
                  required: "Your email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email must be valid",
                  },
                })}
                name="user_email"
                id="user_email"
                className="contactForm__email-input"
              />
              {errors.user_email?.message ? (
                <div className="contactForm__error-msg">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  <p>{errors.user_email?.message as string}</p>
                </div>
              ) : null}
            </div>
            <div
              className="contactForm__message"
              style={{
                opacity: activeForm ? "" : "0.3",
              }}>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters long",
                  },
                })}
                id="message"
                className="contactForm__message-input"
                rows={5}
              />
              {errors.message?.message ? (
                <div className="contactForm__error-msg">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  <p>{errors.message?.message as string}</p>
                </div>
              ) : null}
            </div>
            <div className="contactForm__button-container">
              <input
                type="submit"
                value={formButton}
                className="contactForm__button"
                disabled={buttonDisabled}
              />
              <ClipLoader
                cssOverride={override}
                color="#ffffff"
                loading={loading}
                size={19}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={0.7}
              />
            </div>
          </form>
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </div>
  );
}

export default ContactForm;
