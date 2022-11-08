import React from 'react'

const TonalButtonWithIcon = ({id, name, icon, type, classBtnColor}) => {
  return (
    <label htmlFor={id} className={classBtnColor}>
        <span className={icon}></span>
        <input type={type} value={name} id={id}/>
    </label>
  )
}

export default TonalButtonWithIcon