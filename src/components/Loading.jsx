import React from 'react'
import Modal from './Modal'
import Waves from './Waves'

const Loading = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
        <section className='loading'>
            <div className='loading__container'>
                <span className='i_ear-left'></span>
                <span className='i-ear-right'></span>

                <p>Loading...</p>
            </div>

            <Waves />
        </section>
    </Modal>
  )
}

export default Loading