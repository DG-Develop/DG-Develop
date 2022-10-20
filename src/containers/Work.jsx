import React, { useEffect, useRef, useState } from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import genc from "../assets/static/genc.jpg";

const Work = () => {
  const firstWork = useRef(null);
  const workStart = useRef(null);
  const iconContainer = useRef(null);
  const firstIntersection = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    firstIntersection.current && observer.observe(firstIntersection.current);

    return () => {
      firstIntersection.current &&
        observer.unobserve(firstIntersection.current);
    };
  }, [firstIntersection, options]);

  useEffect(() => {
    isVisible
      ? firstWork.current.classList.add("animation-fadeinRight")
      : firstWork.current.classList.remove("animation-fadeinRight");
  }, [isVisible]);

  const handleScroll = () => {
    const top = workStart.current.scrollTop;
    console.log(top);

    if (window.innerWidth >= 1024) {
      if (top >= 0 && top < 100) {
        iconContainer.current.classList.remove("motion-top");
        iconContainer.current.classList.remove("motion-middle");
      } else if (top > 101 && top < 160) {
        iconContainer.current.classList.remove("motion-top");
        iconContainer.current.classList.add("motion-middle");
      } else {
        iconContainer.current.classList.remove("motion-middle");
        iconContainer.current.classList.add("motion-top");
      }
    } else {
      if (top >= 0 && top < 110) {
        iconContainer.current.classList.remove("motion-top");
        iconContainer.current.classList.remove("motion-middle");
      } else if (top > 111 && top < 200) {
        iconContainer.current.classList.remove("motion-top");
        iconContainer.current.classList.add("motion-middle");
      } else {
        iconContainer.current.classList.remove("motion-middle");
        iconContainer.current.classList.add("motion-top");
      }
    }
  };

  return (
    <>
      <Header />

      <section className="scroll-dynamic">
        <div className="icon-container" ref={iconContainer}>
          <IconAnimated />
        </div>

        <section className="work-start" ref={workStart} onScroll={handleScroll}>
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

          <section className="work-content" ref={firstWork}>
            <div className="work-title--right">
              <h3>GenC</h3>
              <p>Contract generator</p>
            </div>

            <div className="work-background">
              <div>
                <img src={genc} alt="work image about contract generator" />
              </div>
            </div>
          </section>

          <div ref={firstIntersection}></div>
        </section>
      </section>
    </>
  );
};

export default Work;