import React, { useEffect, useRef } from "react";
import IconAnimated from "../components/IconAnimated";
import { Header } from "../components/Header";
import Separator from "../components/Separator";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import useObserver from "../hooks/useObserver";
import { chooseWork } from "../features/works/workSlice";

const Work = () => {
  const works = useAppSelector(({ workEstado }) => workEstado.works);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const [observer, setElements, entries] = useObserver({
    threshold: 0.5,
    root: null,
  });

  const srollDynamic = useRef(null);
  const iconContainer = useRef(null);

  useEffect(() => {
    const targetsDesktop = document.querySelectorAll(".work-content--desktop");
    const targetsMobile = document.querySelectorAll(".work-content--mobile");
    const scrollContent = document.querySelector(".scroll-content");

    setElements([...targetsDesktop, ...targetsMobile, scrollContent]);
  }, [setElements]);

  useEffect(() => {
    function cleanAnimation() {
      const animationElementRight = document.querySelector(
        ".animation-fadeinRight"
      );
      const animationElementLeft = document.querySelector(
        ".animation-fadeinLeft"
      );

      if (animationElementRight) {
        animationElementRight.classList.remove("animation-fadeinRight");
      }

      if (animationElementLeft) {
        animationElementLeft.classList.remove("animation-fadeinLeft");
      }
    }

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        cleanAnimation()

        if (element.className === "scroll-content") {
          cleanAnimation()
        }

        element.className.includes("work-right")
          ? element.classList.add("animation-fadeinRight")
          : element.className.includes("work-left")
          ? element.classList.add("animation-fadeinLeft")
          : "";
      }
    });
  }, [entries, observer]);


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

  const HandleNavigateWorkInfo = (work) => {
    dispatch(chooseWork(work))
    navigate(`/work/${work.title}`);
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

          <Separator />
          <Separator />

          {works.map((work, idx) => (
            <div key={work.id}>
              <section
                className={`work-content--${
                  work.mediaQuery === "Desktop" ? "desktop" : "mobile"
                } ${idx % 2 === 0 ? "work-right" : "work-left"}`}
              >
                <div className="work-title">
                  <h3>{work.title}</h3>
                  <p>{work.subtitle}</p>
                </div>

                <div
                  className="work-background"
                  onClick={() => HandleNavigateWorkInfo(work)}
                >
                  <div>
                    <img
                      src={work.imageTitle}
                      alt="work image about contract generator"
                    />
                  </div>
                </div>
              </section>

              <Separator />
              <Separator />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Work;
