import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
