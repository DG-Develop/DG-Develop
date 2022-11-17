import React from 'react'
import Modal from './Modal'
import gecon from "../assets/static/Gecon.png";

const ModalImage = ({ isOpen, OnCloseModal}) => {
  const listaImagenes = [
    gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon,
    gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon, gecon,
  ]

  return (
    <Modal isOpen={isOpen}>
        <section className='modal-image'>
          <div className='modal-image__content'>
            <label htmlFor='close-modal-image' aria-label='label button' role={"Close Modal"} className='btn__close-modal'>
              <input type="button" id='close-modal-image' onClick={OnCloseModal}/>
              <span className='i_close'></span> 
            </label>

            <div className='modal__image-main'>
              <img src={gecon} alt="home" />
            </div>

            <div className='modal__carousel-image'>
              {listaImagenes.map((imagen, idx) => (
                <img  key={idx} src={imagen} alt={`iamgen-${idx}`} />
              ))}
            </div>
          </div>

        </section>
    </Modal>
  )
}

export default ModalImage