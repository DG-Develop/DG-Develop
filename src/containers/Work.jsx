import React, { useEffect, useRef, useState } from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import genc from "../assets/static/genc.jpg";

const Work = () => {
  const firstWork = useRef(null)
  const firstIntersection = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  }

  useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      firstIntersection.current && observer.observe(firstIntersection.current)

      return () => {
        firstIntersection.current && observer.unobserve(firstIntersection.current)
      }
  }, [firstIntersection, options])

  useEffect(() => {
    if(isVisible){
      console.log('soy visible')
      // firstWork.current.className = "work-content animation-fadeinRight"
      firstWork.current.classList.remove('animation-fadeoutRight')
      firstWork.current.classList.add('animation-fadeinRight')
    }else{
      console.log('Soy invisible')
      // firstWork.current.classname = "work-content"
      firstWork.current.classList.remove('animation-fadeinRight')
      firstWork.current.classList.add('animation-fadeoutRight')

    }
  }, [isVisible])

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
        </section>
        <div ref={firstIntersection}></div>
      </section>
    </>
  );
};

export default Work;
