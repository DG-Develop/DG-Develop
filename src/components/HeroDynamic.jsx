import React from "react";
import IconAnimated from "./IconAnimated";

const HeroDynamic = ({ OnNextStack }) => {

  return (
    <section className="Hero">
      <div className="Hero__description">
        <h1>Hi, I'm David, <br /> Full Stack Developer</h1>
        <p>
          Specialist in database management, API creation and web application
          designer.
        </p>
      </div>

      <div className="hero__decoration">
        <div className="decoration__content">
          <span className="decoration accent"></span>
          <span className="decoration primary"></span>
          <span className="decoration primary-dark"></span>

          <IconAnimated />
        </div>
      </div>

      <div className="hero__actions">
        <button className="button-primary">Go to Work</button>
        <span className="i_arrow-down" onClick={OnNextStack}></span>
      </div>
    </section>
  );
};

export default HeroDynamic;
