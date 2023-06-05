import React from 'react'
import Modal from './Modal'

const ModalMessage = () => {
  return (
    <Modal>
      <article>
        <div><h2>title</h2></div>
        <div>
          body
        </div>
        <div>
          actions
        </div>
      </article>
    </Modal>
  )
}

export default ModalMessage