import React from 'react'

const Snackbar = () => {

  return ReactDOM.createPortal(
    <div className="snackbar">
      {children}
    </div>,
    document.querySelector("#snackbar")
  );
}

export default Snackbar