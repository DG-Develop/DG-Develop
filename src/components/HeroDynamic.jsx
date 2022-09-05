import React from "react";
import IconAnimated from "./IconAnimated";

const HeroDynamic = () => {
  return (
    <section className="Hero">
      <div className="Hero__description">
        <h1>Hi, I'm David, <br /> Full Stack Developer</h1>
        <p>
          Specialist in database management, API creation and web application
          designer.
        </p>
      </div>

      <div>
        <span className="decoration accent"></span>
        <span className="decoration primary"></span>
        <span className="decoration primary-dark"></span>

        <IconAnimated />
      </div>

      <div>
        <button>Go to Work</button>
        <span className="i_arrow-down"></span>
      </div>
    </section>
  );
};

export default HeroDynamic;
