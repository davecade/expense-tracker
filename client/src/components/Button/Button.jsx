import React from 'react'
import "./Button.scss"

const Button = ({ title, color="" }) => {
  return (
    <div className={`button-container ${color}`}>
        <div className='button'>{title}</div>
    </div>
  )
}

export default Button