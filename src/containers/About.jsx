import React from "react";
import { Header } from "../components/Header";

import me from "../assets/static/me.png";
import meBig from "../assets/static/me_big.png";

const About = () => {
  return (
    <>
      <Header />

      <section className="about">
        <div>
          <h2>This is some about me...</h2>
          <div className="about__image">
            <picture>
              <source srcSet={meBig} media="(min-width: 1024px)" />
              <img src={me} alt="My photo presentation" />
            </picture>
          </div>
          <div className="about__content">
            <hr />
            <p>
              I'm a Backend Developer with 3 years experience in development and
              analytics about APIs and integration and deploy application web
              and mobile.
              <br />
              Also UI and UX design with 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
