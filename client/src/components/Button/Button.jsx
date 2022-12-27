import React from 'react'
import "./Button.scss"

const Button = ({ title, onClick }) => {
  return (
    <div className={`button-container`} onClick={onClick}>
        <div className='button'>{title}</div>
    </div>
  )
}

export default Button