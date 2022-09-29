import React from "react";
import ChipRadio from "../components/ChipRadio";

import { Header } from "../components/Header";

const Contact = () => {
  const handleSubmit = () => {};

  const handleChangeRadio = () => {};

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
      title: "Datbase",
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
                  OnChange={handleChangeRadio}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="contact-inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
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