import React from 'react'
import Modal from './Modal'
import Waves from './Waves'

const Loading = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
        <section>
            <div>
                <span></span><span></span>

                <p>Loading...</p>
            </div>

            <Waves />
        </section>
    </Modal>
  )
}

export default Loading