import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
  const [formButton, setFormButton] = useState("Processing...");

  // const onSubmit: SubmitHandler<formInputs> = (data) => {
  //   setFormButton("Processing...");
  // };

  const sendEmail = () => {
    setButtonDisabled(true);
    setFormButton("Processing...");
    emailjs
      .sendForm(
        "service_bmtqgw4",
        "template_xz1nq4q",
        form.current as HTMLFormElement,
        "OcZLgXNyVy6jnKdjG"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current!.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactForm">
      <h3 className="contactForm__heading">Contact form</h3>

      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="contactForm__formular">
        <div className="contactForm__name">
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
        <div className="contactForm__email">
          <label htmlFor="user_email">Your email</label>
          <input
            {...register("user_email", {
              required: "Your email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid",
              },
            })}
            // type="email"
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
        <div className="contactForm__message">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters long",
              },
            })}
            // name="message"
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
        <input
          type="submit"
          value={formButton}
          className="contactForm__button"
          disabled={buttonDisabled}
        />
      </form>
    </div>
  );
}

export default ContactForm;
