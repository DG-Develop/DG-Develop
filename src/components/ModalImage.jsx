import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { useIsOverflow } from "../hooks/useIsOverflow";

const ModalImage = ({ isOpen, OnCloseModal, ListaImagenes }) => {
  const carousel = useRef(null);
  const [imageSelect, setImageSelect] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const _ = useIsOverflow(carousel, (hasOverflow) => {
    if (!hasOverflow) {
      carousel.current.style.justifyContent = "center";
    }

    setIsOverflow(hasOverflow);
  });

  useEffect(() => {
    if (isOpen) {
      if(ListaImagenes.length > 1){
          const input = document.querySelector("#imagen-0");
          input.checked = true;
      }

      if(ListaImagenes[0]){
        setImageSelect(ListaImagenes[0]);
      }
    }
  }, [isOpen]);


  const clearState = () => {
    setScrollX(0);
    setScrollEnd(false);
    setIsOverflow(false);
  };

  const handleCloseModal = () => {
    const iconClose = document.querySelector(".i_close");
    iconClose.classList.add("close-icon");

    const modal = document.querySelector(".modal-image");
    modal.classList.add("close-modal");

    setTimeout(() => {
      modal.classList.remove("close-modal");
      iconClose.classList.remove("close-icon");

      clearState();
      OnCloseModal();
    }, 1000);
  };

  const handleScroll = (shift) => {
    carousel.current.scrollLeft += shift;

    setScrollX(scrollX + shift);

    setScrollEnd(
      Math.floor(carousel.current.scrollWidth - carousel.current.scrollLeft) <=
        carousel.current.offsetWidth
    );
  };

  const handleChangeImage = (id) => {
    setImageSelect(ListaImagenes[id]);
  };

  const handleScrollMove = (event) => {
    setScrollX(event.currentTarget.scrollLeft);

    setScrollEnd(
      Math.floor(
        event.currentTarget.scrollWidth - event.currentTarget.scrollLeft
      ) <= event.currentTarget.offsetWidth
    );
  };

  return (
    <Modal isOpen={isOpen}>
      <section className="modal-image">
        <div className="modal-image__content">
          <label
            htmlFor="close-modal-image"
            aria-label="label button"
            role={"Close Modal"}
            className="btn__close-modal"
          >
            <input
              type="button"
              id="close-modal-image"
              onClick={handleCloseModal}
            />
            <span className="i_close"></span>
          </label>

          <div className={`modal__image-main ${imageSelect?.media === 'mobile' && "modal__image-main-mobile"}`}>
            <img src={imageSelect?.route} alt="home" />
          </div>

          {ListaImagenes.length > 1 && (
            <div className={`modal__carousel-image ${imageSelect?.media === 'mobile' && "modal__carousel-image-mobile"}`}>
              {isOverflow && scrollX !== 0 ? (
                <div onClick={() => handleScroll(-50)}>
                  <span className="i_return"></span>
                </div>
              ) : (
                <div></div>
              )}

              <div
                className="carousel"
                ref={carousel}
                onScroll={handleScrollMove}
              >
                {ListaImagenes.map((imagen, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      id={`imagen-${idx}`}
                      name="carouselImage"
                      onChange={() => handleChangeImage(idx)}
                    />
                    <img src={imagen.route} alt={`iamgen-${idx}`} />
                  </div>
                ))}
              </div>

              {isOverflow && !scrollEnd ? (
                <div onClick={() => handleScroll(+50)}>
                  <span className="i_next"></span>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </section>
    </Modal>
  );
};

export default ModalImage;
