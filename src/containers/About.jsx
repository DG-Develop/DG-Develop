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

          <hr className="line__lead" />
          <div className="about__content">
            <hr />
            <p>
              My name is David Gomez, I'm 26 years old and I'm Mexican, I like
              all about software development and design patterns. My favorite
              color is red and I consider myself a person with capatiblities of
              analyze complex tecnique information.
              <br />
              Also I'm a Backend Developer with 3 years experience in
              development and analytics about APIs and integration and deploy
              application web and mobile.
            </p>
          </div>
          <div className="about__decoration">
            <hr className="line__left" />

            <div className="decoration__name">
              <div className="inner-circle__line">
                <div className="circle"></div>
              </div>
              <p>DGDevelop</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
