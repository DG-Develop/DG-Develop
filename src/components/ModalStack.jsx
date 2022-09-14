import React from "react";
import Modal from "./Modal";

import kotlin from '../assets/static/kotlin_icon.png'

const ModalStack = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <section className="modal__content-center">
        <div className="card__carousel">
            <div className="carousel__header">
                <h2>Mobile Developer</h2>
                <span className="i_close"></span>
            </div>

            <div className="carousel__animated">
                <div className="slide">

                    <div className="carousel__item">
                        <img src={kotlin} alt="" />
                        <div>
                            <p>Kotlin</p>
                            <p>Android</p>
                        </div>
                    </div>

                    <div className="carousel__item">
                        <img src={kotlin} alt="" />
                        <div>
                            <p>Kotlin</p>
                            <p>Android</p>
                        </div>
                    </div>

                    <div className="carousel__item">
                        <img src={kotlin} alt="" />
                        <div>
                            <p>Kotlin</p>
                            <p>Android</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalStack;
