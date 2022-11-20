import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import gecon from "../assets/static/Gecon.png";
import geconContractList from "../assets/static/Gecon_Contract_List.png";
import geconEmployeeList from "../assets/static/Gecon_Employee_List.png";
import geconGenerateContracts from "../assets/static/Gecon_Generate_Contracts.png";
import geconUpdateContract from "../assets/static/Gecon_Update_Contract.png";
import geconAddSignature from "../assets/static/Gecon_Add_Signature.png";
import { useIsOverflow } from "../hooks/useIsOverflow";

const ModalImage = ({ isOpen, OnCloseModal }) => {
  const carousel = useRef(null);
  const [imageSelect, setImageSelect] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const [scrollEnd, setScrollEnd] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false);
  const _ = useIsOverflow(carousel, (hasOverflow) => {
    if (!hasOverflow) {
      carousel.current.style.justifyContent = "center";
    }

    setIsOverflow(hasOverflow);
  });

  const listaImagenes = [
    gecon,
    geconContractList,
    geconEmployeeList,
    geconGenerateContracts,
    geconUpdateContract,
    geconAddSignature,
    gecon,
    geconContractList,
    geconEmployeeList,
    geconGenerateContracts,
    geconUpdateContract,
    geconAddSignature,
    gecon,
    geconContractList,
    geconEmployeeList,
    geconGenerateContracts,
    geconUpdateContract,
    geconAddSignature,
    gecon,
    geconContractList,
    geconEmployeeList,
    geconGenerateContracts,
    geconUpdateContract,
    geconAddSignature,
    gecon,
    geconContractList,
    geconEmployeeList,
    geconGenerateContracts,
    geconUpdateContract,
    geconAddSignature
  ];

  useEffect(() => {
    if(isOpen){
      const input = document.querySelector('#imagen-0')
      input.checked = true
      setImageSelect(listaImagenes[0])
    }
  }, [isOpen])

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

  const handleScroll = (shift) => {
    carousel.current.scrollLeft += shift

    setScrollX(scrollX + shift)

    setScrollEnd(Math.floor(carousel.current.scrollWidth - carousel.current.scrollLeft) <= carousel.current.offsetWidth)
  };

  const handleChangeImage = (id) => {
    setImageSelect(listaImagenes[id])
  }

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
            <img src={imageSelect} alt="home" />
          </div>

          <div className="modal__carousel-image">
            {(isOverflow && scrollX !== 0) && (
              <div onClick={() => handleScroll(-50)}>
                <span className="i_return"></span>
              </div>
            )}

            <div className="carousel" ref={carousel}>
              {listaImagenes.map((imagen, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    id={`imagen-${idx}`}
                    name="carouselImage"
                    onChange={() => handleChangeImage(idx)}
                  />
                  <img src={imagen} alt={`iamgen-${idx}`} />
                </div>
              ))}
            </div>

            {(isOverflow && !scrollEnd) && (
              <div onClick={() => handleScroll(+50)}>
                <span className="i_next"></span>
              </div>
            )}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalImage;
