import React, { useEffect, useRef, useState } from "react";
import TonalButtonWithIcon from "../widgets/TonalButtonWithIcon";

import { Link } from "react-router-dom";
import useObserver from "../hooks/useObserver";
import ModalImage from "../components/ModalImage";
import { useAppSelector } from "../app/hooks";

const WorkInfo = () => {
  const work = useAppSelector(({ workEstado }) => workEstado.workSelect);

  const infoDescrip = useRef(null);
  const [isOpenModalImage, setIsOpenModalImage] = useState(false);
  const [themePrincipal, setThemePrincipal] = useState("")
  const [imageList, setImageList] = useState([])

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    if(work){
      setThemePrincipal(work.colorTheme)
    }
  }, [work])

  useEffect(() => {
    const targets = document.querySelectorAll(".description__work-item");

    setElements(targets);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add("fadeInDown");
        observer.unobserve(element);
      }
    });
  }, [entries, observer]);

  const handleMainToDesc = () => {
    infoDescrip.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenModalImage = (list) => {
    setImageList(list)
    setIsOpenModalImage(true);
  };

  const handleCloseModalImage = () => {
    setIsOpenModalImage(false);
  };

  return (
    <main className="info__container">
      <section className={`info__about ${themePrincipal}`}>
        <div className="sticky__header">
          <span className="i_back">
            <Link to="/work"></Link>
          </span>
          <h1>{work.title}</h1>
        </div>

        <div className="info__content">
          <p>{work.subtitle}</p>
          <p>{work.appDescription}</p>
        </div>

        <div className="info__action">
          <TonalButtonWithIcon
            id="btn-see-more"
            name="See more"
            icon="i_arrow-down"
            type="button"
            classBtnColor="tonal-button-primary"
            onClick={handleMainToDesc}
          />
        </div>

        <div
          className={`info__image--main ${
            work.mediaQuery === "Mobile" && "mobile-image__main"
          }`}
        >
          <img
            src={work.imageTitle}
            alt="image home of proyect GECON"
            onClick={() => handleOpenModalImage([work.imageTitle])}
          />
        </div>
      </section>

      <section className="info__description" ref={infoDescrip}>
        {work.listImage.map((image, idx) => (
          <div
            className={`description__work-item ${idx % 2 !== 0 && "invert"}`}
            key={image.id}
          >
            <div className={`work-item__header ${themePrincipal}`}>
              <h4>{image.imageTitle}</h4>
              <img src={image.route} alt="image home of proyect GECON" onClick={() => handleOpenModalImage(image.listImage.map(img => img.route))}/>
            </div>
            <div className="work-item__content">
              <p>
                {image.description.map((desc, idx) => (
                  <span key={idx}>
                    {desc} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </section>

      <ModalImage
        isOpen={isOpenModalImage}
        OnCloseModal={handleCloseModalImage}
        ListaImagenes={imageList}
      />
    </main>
  );
};

export default WorkInfo;
