import React, { useRef } from 'react'
import ReactDOM from "react-dom";

const Snackbar = ({ isOpen, message, onClose }) => {
  const snackbar = useRef(null)

  if(!isOpen){
    return
  }

  const handleClose  = () => {
      snackbar.current.classList.add('close-snackbar')

      setTimeout(() => {
        onClose()
      }, 500)
  }

  return ReactDOM.createPortal(
    <article className="snackbar" ref={snackbar}>
        <div className='snackbar-info'>
          <p>{message}</p>
          <span className='i_close' onClick={handleClose}></span>
        </div>

        <div className='snackbar-loader__container'>
          <div></div>
        </div>
    </article>,
    document.querySelector("#snackbar-portal")
  );
}

export default Snackbar