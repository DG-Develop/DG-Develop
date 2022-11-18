import React from "react";
import Modal from "./Modal";
import gecon from "../assets/static/Gecon.png";

const ModalImage = ({ isOpen, OnCloseModal }) => {
  const listaImagenes = [
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
    gecon,
  ];

  const handleCloseModal = () => {
    const iconClose = document.querySelector(".i_close");
    iconClose.classList.add("close-icon");

    const modal = document.querySelector(".modal-image");
    modal.classList.add("close-modal");

    setTimeout(() => {
      modal.classList.remove("close-modal");
      iconClose.classList.remove("close-icon");
      OnCloseModal();
    }, 1000);
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

          <div className="modal__image-main">
            <img src={gecon} alt="home" />
          </div>

          <div className="modal__carousel-image">
            {listaImagenes.map((imagen, idx) => (
              <div key={idx}>
                <input
                    type="radio"
                    id={`imagen-${idx}`}
                    name="carouselImage"
                  />
                <img src={imagen} alt={`iamgen-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalImage;
