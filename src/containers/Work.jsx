import React from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import genc from "../assets/static/genc.jpg";

const Work = () => {
  return (
    <>
      <Header />

      <section className="scroll-dynamic">
        <div className="icon-container">
          <IconAnimated />
        </div>

        <section className="work-start">
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

          <section className="work-content">
            <div>
              <h3>GenC</h3>
              <p>Contract generator</p>
            </div>

            <div>
              <div>
                <img src={genc} alt="work image about contract generator" />
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Work;
