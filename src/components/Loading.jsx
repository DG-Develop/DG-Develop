import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import Waves from './Waves'

const Loading = ({ isOpen }) => {
  const [classDinamic, setClassDinamic] = useState('loading') 

  useEffect(() => {
    setTimeout(() => {
      setClassDinamic('loading active')
    }, 365)

    setTimeout(() => {
      setClassDinamic('loading')
    }, 3500)
  }, [classDinamic])

  return (
    <Modal isOpen={isOpen}>
        <section className={classDinamic}>
            <div className='loading__container'>
              <div className='loading-anim'>
                <span className='i_ear-left'></span>
                <span className='i-ear-right'></span>
              </div>

                <p>Loading...</p>
            </div>

            <Waves />
        </section>
    </Modal>
  )
}

export default Loading