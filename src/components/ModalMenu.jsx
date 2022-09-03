import React, { useRef } from "react";

const ModalMenu = ({ OnCloseModal }) => {
  const modalMenu = useRef(null);

  const handleCloseModalMenu = () => {
    modalMenu.current.style = "animation: fadeOutUpBig 1.4s ease-in";
    modalMenu.current.parentElement.style = "animation: fadeOut 1.4s";
    console.log(modalMenu.current.parentElement)

    setTimeout(() => {
      OnCloseModal();
    }, 1200)
    
  };

  return (
    <div className="modal">
      <div className="modal__menu" ref={modalMenu}>
        <div className="button-circle" onClick={handleCloseModalMenu}>
          <span className="i_close"></span>
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
