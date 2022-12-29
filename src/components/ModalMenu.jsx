import React, { useRef } from "react";
import { Link } from "react-router-dom";

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

  const hadleKeyDown = (e) => {
    if (e.key === "Enter"){
      handleCloseModalMenu()
    }
  }

  return (
    <div className="modal">
      <div className="modal__menu" ref={modalMenu}>
        <div className="button-circle" onClick={handleCloseModalMenu} tabIndex="0" onKeyDown={hadleKeyDown}>
          <span className="i_close"></span>
        </div>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/work">WORK</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
