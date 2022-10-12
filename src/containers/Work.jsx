import React from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";

const Work = () => {
  return (
    <>
      <Header />

      <section className="scroll-dynamic">
        <div className="icon-container">
          <IconAnimated />
        </div>

        <div className="scroll-content">
          <div>
            <h1>Welcome to my portfolio works</h1>
            <p>In this section you can see all my projects that I made it</p>
          </div>

          <div className="scroll-motion">
            <span className="scroll-icon"></span>
            <p>Scroll On!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
