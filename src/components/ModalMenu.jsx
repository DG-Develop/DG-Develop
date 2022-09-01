import React from "react";
import "../assets/components/ModalMenu.scss";

const ModalMenu = () => {
  return (
    <div className="modal">
      <div className="modal__menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
