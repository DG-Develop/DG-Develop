import React, { useEffect, useRef, useState } from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import genc from "../assets/static/genc.jpg";
import keradent from "../assets/static/Keradent.jpg";
import baluarteck from "../assets/static/Baluartteck.jpg";
import saintscript from "../assets/static/Saintscript.jpg";
import Separator from "../components/Separator";

const Work = () => {
  const firstWork = useRef(null);
  const secondWork = useRef(null);
  const thirdWork = useRef(null);
  const fourthWork = useRef(null);
  const workStart = useRef(null);
  const iconContainer = useRef(null);
  const firstIntersection = useRef(null);
  const secondIntersection = useRef(null);
  const thirdIntersection = useRef(null);
  const fourthIntersection = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isVisibleFourh, setIsVisibleFourth] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callbackFunctionSecond = (entries) => {
    const [entry] = entries;
    setIsVisibleSecond(entry.isIntersecting);
  };

  const callbackFunctionThird = (entries) => {
    const [entry] = entries;
    setIsVisibleThird(entry.isIntersecting);
  };


  const callbackFunctionFourth = (entries) => {
    const [entry] = entries;
    setIsVisibleFourth(entry.isIntersecting);
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
    const observer = new IntersectionObserver(callbackFunctionSecond, options);
    secondIntersection.current && observer.observe(secondIntersection.current);

    return () => {
      secondIntersection.current &&
        observer.unobserve(secondIntersection.current);
    };
  }, [secondIntersection, options]);


  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunctionThird, options);
    thirdIntersection.current && observer.observe(thirdIntersection.current);

    return () => {
      thirdIntersection.current &&
        observer.unobserve(thirdIntersection.current);
    };
  }, [thirdIntersection, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunctionFourth, options);
    fourthIntersection.current && observer.observe(fourthIntersection.current);

    return () => {
      fourthIntersection.current &&
        observer.unobserve(fourthIntersection.current);
    };
  }, [fourthIntersection, options]);

  useEffect(() => {
    isVisible
      ? firstWork.current.classList.add("animation-fadeinRight")
      : firstWork.current.classList.remove("animation-fadeinRight");
  }, [isVisible]);

  useEffect(() => {
    isVisibleSecond
      ? secondWork.current.classList.add("animation-fadeinLeft")
      : secondWork.current.classList.remove("animation-fadeinLeft");
  }, [isVisibleSecond]);

  useEffect(() => {
    isVisibleThird
      ? thirdWork.current.classList.add("animation-fadeinRight")
      : thirdWork.current.classList.remove("animation-fadeinRight");
  }, [isVisibleThird]);

  useEffect(() => {
    isVisibleFourh
      ? fourthWork.current.classList.add("animation-fadeinLeft")
      : fourthWork.current.classList.remove("animation-fadeinLeft");
  }, [isVisibleFourh]);

  const handleScroll = () => {
    const height = workStart.current.scrollHeight;
    const top = workStart.current.scrollTop;
    // console.log(top);

    if (window.innerWidth >= 1024) {
      const tenPorcent = parseInt((10 * height) / 100);
      const thirtyPorcent = parseInt((30 * height) / 100);

      if (top >= 0 && top < tenPorcent) {
        iconContainer.current.classList.remove("motion-top");
        iconContainer.current.classList.remove("motion-middle");
      } else if (top > tenPorcent + 1 && top < thirtyPorcent) {
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

      <section className="scroll-dynamic" onScroll={handleScroll} ref={workStart}>
        <div className="icon-container" ref={iconContainer}>
          <IconAnimated />
        </div>

        <section className="work-start" >
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

          <Separator />

          <section className="work-content--desktop work-right" ref={firstWork}>
            <div className="work-title">
              <h3>GenC</h3>
              <p>Contract generator</p>
            </div>
            <div ref={firstIntersection}></div>

            <div className="work-background">
              <div>
                <img src={genc} alt="work image about contract generator" />
              </div>
            </div>
          </section>

          <Separator />

          <section className="work-content--desktop work-left" ref={secondWork}>
            <div className="work-title">
              <h3>Keradent</h3>
              <p>Register of expedients</p>
            </div>
            <div ref={secondIntersection}></div>

            <div className="work-background">
              <div>
                <img
                  src={keradent}
                  alt="work image about register of expedients"
                />
              </div>
            </div>
          </section>

          <Separator />

          <section className="work-content--mobile work-right" ref={thirdWork}>
            <div className="work-title">
              <h3>Baluarteck</h3>
              <p>Mobile checker</p>
            </div>
            <div ref={thirdIntersection}></div>

            <div className="work-background">
              <div>
                <img src={baluarteck} alt="work image about mobile checker" />
              </div>
            </div>
          </section>

          <Separator />

          <section className="work-content--mobile work-left" ref={fourthWork}>
            <div className="work-title">
              <h3>Saintscript</h3>
              <p>Register of informationr</p>
            </div>
            <div ref={fourthIntersection}></div>

            <div className="work-background">
              <div>
                <img src={saintscript} alt="work image about mobile checker" />
              </div>
            </div>
          </section>

          <Separator />
        </section>
      </section>
    </>
  );
};

export default Work;
