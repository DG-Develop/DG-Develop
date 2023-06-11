import React from "react";

const StackMain = ({ Ref, OnNextFooter, OnOpenModal }) => {

  const handleOpenModalStack = (title) => {
      OnOpenModal(title)
  }

  const hadleKeyDown = (e, title) => {
    if (e.key === "Enter"){
      handleOpenModalStack(title)
    }
  }

  return (
      <section className="stack" ref={Ref}>
        <div className="stack__header">
          <div>
            <h3>Services I Offer</h3>
          </div>

          <div>
            <hr />
            <p>
            I can help you by offering the following services to create your 
            innovative or business idea and grow it exponentially, in addition
            to handling large amounts of data and help you to generate a critic 
            opnion about the data obtained.
            </p>
          </div>
        </div>

        <div className="stack__content">

          <div>
            <hr />
            <div className="stack__name">
              <p>01/</p>
              <p>
                API & <br /> Database
              </p>
            </div>
            <div className="button-primary" onClick={() => handleOpenModalStack("API & Database")} tabIndex="0" onKeyDown={(e) => hadleKeyDown( e, "API & Database")}>
              <span className="database-icon"></span>
              <p>View Stack</p>
            </div>
          </div>

          <div>
            <hr />
            <div className="stack__name">
              <p>02/</p>
              <p>
                Web <br /> Development
              </p>
            </div>
            <div className="button-primary" onClick={() => handleOpenModalStack("Web Development")} tabIndex="0" onKeyDown={(e) => hadleKeyDown( e, "Web Development")}>
              <span className="desktop-icon"></span>
              <p>View Stack</p>
            </div>
          </div>

          <div>
            <hr />
            <div className="stack__name">
              <p>03/</p>
              <p>
                Mobile <br /> Development
              </p>
            </div>
            <div className="button-primary" onClick={() => handleOpenModalStack("Mobile Development")} tabIndex="0" onKeyDown={(e) => hadleKeyDown( e, "Mobile Development")}>
              <span className="cell-icon"></span>
              <p>View Stack</p>
            </div>
          </div>

        </div>

        <div className="stack__decorations">
          <span className="decoration-left"></span>
          <span className="i_arrow-down" onClick={OnNextFooter}></span>
        </div>
      </section>
  );
};

export default StackMain;
