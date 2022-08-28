import React from 'react'
import "./Button.scss"

const Button = ({ title, color="", onClick }) => {
  return (
    <div className={`button-container ${color}`} onClick={onClick}>
        <div className='button'>{title}</div>
    </div>
  )
}

export default Button