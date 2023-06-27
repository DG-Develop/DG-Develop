import React, { useState } from "react";
import ChipRadio from "../components/ChipRadio";
import emailjs from "@emailjs/browser";

import { Header } from "../components/Header";
import TansitionsNavbar from "../Animations/TansitionsNavbar";
import Snackbar from "../components/Snackbar";

const Contact = () => {
  const [messageSnackbar, setMessageSnackbar] = useState('')
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        e.target,
        process.env.YOUR_PUBLIC_KEY
      );

      if (result.text == "Ok") {
        setMessageSnackbar('Correo enviado.')
        setIsOpenSnackbar(true)
      }

      setMessageSnackbar('Correo enviado.')
        setIsOpenSnackbar(true)

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackbar = () => {
    setIsOpenSnackbar(false)
  }

  const issues = [
    {
      title: "API",
      name: "tag",
      id: 1,
    },
    {
      title: "Web",
      name: "tag",
      id: 2,
    },
    {
      title: "Database",
      name: "tag",
      id: 3,
    },
    {
      title: "Mobile",
      name: "tag",
      id: 4,
    },
    {
      title: "UI/UX design",
      name: "tag",
      id: 5,
    },
  ];

  return (
    <>
      <Header />
      <TansitionsNavbar>
        <form method="POST" onSubmit={handleSubmit} className="contact-form">
          <section className="contact-issue">
            <div>
              <p>Contact me</p>
              <h2>How can I help you?</h2>
            </div>

            <div>
              <label htmlFor="issue">I'm interested in...</label>
              <div className="chips-container">
                {issues.map((issue, index) => (
                  <ChipRadio
                    key={index}
                    Name={issue.name}
                    Id={issue.id}
                    Title={issue.title}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="contact-inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
          </section>

          <section className="contact-action">
            <div>
              <input type="submit" value="Sent request" />
            </div>
          </section>
        </form>
      </TansitionsNavbar>

      <Snackbar isOpen={isOpenSnackbar} message={messageSnackbar} onClose={handleCloseSnackbar} />
    </>
  );
};

export default Contact;
