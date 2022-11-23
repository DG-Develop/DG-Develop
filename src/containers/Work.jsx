import React, { useEffect, useRef, useState } from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import gecon from "../assets/static/Gecon.png";
import keradent from "../assets/static/Keradent.jpg";
import baluarteck from "../assets/static/Baluartteck.jpg";
import saintscript from "../assets/static/Saintscript.jpg";
import Separator from "../components/Separator";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import useObserver from "../hooks/useObserver";

const Work = () => {
  const works = useAppSelector((state) => state.works);
  const navigate = useNavigate();

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  })

  // const firstWork = useRef(null);
  // const secondWork = useRef(null);
  // const thirdWork = useRef(null);
  // const fourthWork = useRef(null);
  const srollDynamic = useRef(null);
  const workStart = useRef(null);
  const iconContainer = useRef(null);
  // const firstIntersection = useRef(null);
  // const secondIntersection = useRef(null);
  // const thirdIntersection = useRef(null);
  // const fourthIntersection = useRef(null);

  const [isElement, setIsElement] = useState([])
  // const [isVisible, setIsVisible] = useState(false);
  // const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  // const [isVisibleThird, setIsVisibleThird] = useState(false);
  // const [isVisibleFourh, setIsVisibleFourth] = useState(false);

  useEffect(() => {
    const targetsDesktop = document.querySelectorAll('.work-content--desktop')
    const targetsMobile = document.querySelectorAll('.work-content--mobile')

    setElements([...targetsDesktop, ...targetsMobile])
  }, [setElements])

  useEffect(() => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        // if(isElement){
        //   console.log(element)
        //   isElement.classList.remove("animation-fadeinRight")
        // }
        const elementFoud = document.querySelector('.animation-fadeinRight')

        if(elementFoud){
          elementFoud.classList.remove('animation-fadeinRight')
        }

        const element = entry.target
        element.classList.add("animation-fadeinRight")

        // setElements([...isElement, element])
      }
    })
  }, [entries, observer])

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // const callbackFunctionSecond = (entries) => {
  //   const [entry] = entries;
  //   setIsVisibleSecond(entry.isIntersecting);
  // };

  // const callbackFunctionThird = (entries) => {
  //   const [entry] = entries;
  //   setIsVisibleThird(entry.isIntersecting);
  // };

  // const callbackFunctionFourth = (entries) => {
  //   const [entry] = entries;
  //   setIsVisibleFourth(entry.isIntersecting);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   firstIntersection.current && observer.observe(firstIntersection.current);

  //   return () => {
  //     firstIntersection.current &&
  //       observer.unobserve(firstIntersection.current);
  //   };
  // }, [firstIntersection, options]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunctionSecond, options);
  //   secondIntersection.current && observer.observe(secondIntersection.current);

  //   return () => {
  //     secondIntersection.current &&
  //       observer.unobserve(secondIntersection.current);
  //   };
  // }, [secondIntersection, options]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunctionThird, options);
  //   thirdIntersection.current && observer.observe(thirdIntersection.current);

  //   return () => {
  //     thirdIntersection.current &&
  //       observer.unobserve(thirdIntersection.current);
  //   };
  // }, [thirdIntersection, options]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunctionFourth, options);
  //   fourthIntersection.current && observer.observe(fourthIntersection.current);

  //   return () => {
  //     fourthIntersection.current &&
  //       observer.unobserve(fourthIntersection.current);
  //   };
  // }, [fourthIntersection, options]);

  // useEffect(() => {
  //   if (isVisible) {
  //     firstWork.current.classList.add("animation-fadeinRight");
  //   }

  //   if ((isVisible && isVisibleSecond) || !isVisible) {
  //     firstWork.current.classList.remove("animation-fadeinRight");
  //   }
  // }, [isVisible, isVisibleSecond]);

  // useEffect(() => {
  //   if (isVisibleSecond) {
  //     secondWork.current.classList.add("animation-fadeinLeft");
  //   }

  //   if ((isVisibleSecond && isVisibleThird) || !isVisibleSecond) {
  //     secondWork.current.classList.remove("animation-fadeinLeft");
  //   }
  // }, [isVisibleSecond, isVisibleThird]);

  // useEffect(() => {
  //   if (isVisibleThird) {
  //     thirdWork.current.classList.add("animation-fadeinRight");
  //   }

  //   if ((isVisibleThird && isVisibleFourh) || !isVisibleThird) {
  //     thirdWork.current.classList.remove("animation-fadeinRight");
  //   }
  // }, [isVisibleThird, isVisibleFourh]);

  // useEffect(() => {
  //   isVisibleFourh
  //     ? fourthWork.current.classList.add("animation-fadeinLeft")
  //     : fourthWork.current.classList.remove("animation-fadeinLeft");
  // }, [isVisibleFourh]);

  const handleScroll = () => {
    const height = srollDynamic.current.scrollHeight;
    const top = srollDynamic.current.scrollTop;

    // const porcentaje = (top * 100) / height;
    // console.log(porcentaje);

    const threePorcent = parseInt((3 * height) / 100);
    const tenPorcent = parseInt((10 * height) / 100);
    const thirtyPorcent = parseInt((30 * height) / 100);
    const fiftyPorcent = parseInt((50 * height) / 100);
    const seventyPorcent = parseInt((70 * height) / 100);
    const eghtyFivePorcent = parseInt((85 * height) / 100);

    if (top >= 0 && top < threePorcent) {
      iconContainer.current.classList.remove("motion-top");
      iconContainer.current.classList.remove("motion-middle");
    } else if (top > threePorcent + 1 && top < tenPorcent) {
      iconContainer.current.classList.remove("motion-top");
      iconContainer.current.classList.add("motion-middle");
    } else if (top > tenPorcent + 1 && top < thirtyPorcent) {
      iconContainer.current.classList.remove("motion-middle");
      iconContainer.current.classList.add("motion-top");
    } else if (top > thirtyPorcent + 1 && top < fiftyPorcent) {
      iconContainer.current.classList.remove("motion-top");
      iconContainer.current.classList.add("motion-middle");
    } else if (top > fiftyPorcent + 1 && top < seventyPorcent) {
      iconContainer.current.classList.remove("motion-middle");
      iconContainer.current.classList.add("motion-top");
    } else if (top > seventyPorcent + 1 && top < eghtyFivePorcent) {
      iconContainer.current.classList.remove("motion-top");
      iconContainer.current.classList.add("motion-middle");
    } else {
      iconContainer.current.classList.remove("motion-top");
      iconContainer.current.classList.remove("motion-middle");
    }
  };

  const HandleNavigateWorkInfo = (name) => {
    navigate(`/work/${name}`);
  };

  return (
    <>
      <Header />

      <section
        className="scroll-dynamic"
        onScroll={handleScroll}
        ref={srollDynamic}
      >
        <div className="icon-container" ref={iconContainer}>
          <IconAnimated />
        </div>

        <section className="work-start" ref={workStart}>
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
          <Separator />

          {works.map((work, idx) => (
            <div key={work.id}>
              <section className={`work-content--${work.mediaQuery === "Desktop" ? "desktop": "mobile"} ${idx % 2 === 0 ? "work-right" : "work-left"}`}>
                <div className="work-title">
                  <h3>{work.title}</h3>
                  <p>{work.subtitle}</p>
                </div>
                {/* <div ref={firstIntersection}></div> */}

                <div
                  className="work-background"
                  onClick={() => HandleNavigateWorkInfo("Gecon")}
                >
                  <div>
                    <img
                      src={gecon}
                      alt="work image about contract generator"
                    />
                  </div>
                </div>
              </section>

              <Separator />
              <Separator />
            </div>
          ))}

          {/* <section className="work-content--desktop work-right" ref={firstWork}>
            <div className="work-title">
              <h3>GenC</h3>
              <p>Contract generator</p>
            </div>
            <div ref={firstIntersection}></div>

            <div
              className="work-background"
              onClick={() => HandleNavigateWorkInfo("Gecon")}
            >
              <div>
                <img src={gecon} alt="work image about contract generator" />
              </div>
            </div>
          </section>

          <Separator />
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
          <Separator /> */}
        </section>
      </section>
    </>
  );
};

export default Work;
