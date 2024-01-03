import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          //   e.currentTarget.reset();
          console.log("email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactForm">
      <h3 className="contactForm__heading">Contact form</h3>

      <form ref={form} onSubmit={sendEmail} className="contactForm__formular">
        <div className="contactForm__name">
          <label htmlFor="user_name">Your name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="contactForm__name-input"
          />
        </div>
        <div className="contactForm__email">
          <label htmlFor="user_email">Your email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="contactForm__email-input"
          />
        </div>
        <div className="contactForm__message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="contactForm__message-input"
            rows={5}
          />
        </div>
        <input type="submit" value="Send" className="contactForm__button" />
      </form>
    </div>
  );
}

export default ContactForm;
