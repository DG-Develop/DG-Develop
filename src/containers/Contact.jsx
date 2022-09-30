import React, { useState } from "react";
import ChipRadio from "../components/ChipRadio";
import emailjs from "@emailjs/browser";

import { Header } from "../components/Header";

const Contact = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_61iulb2",
        "template_5w2jmx7",
        e.target,
        "JT_JBVOEw7g7Zblxm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
            <input type="text" name="name" id="name" required/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required/>
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
    </>
  );
};

export default Contact;
