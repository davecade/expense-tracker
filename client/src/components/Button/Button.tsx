import React from 'react'
import "./Button.scss"

type ButtonProps = {
  title: string
  onClick: () => any
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div className={`button-container`} onClick={onClick} data-testid='@ExpenseTracker_Button_Container'>
        <div className='button' data-testid='@ExpenseTracker_Button_Title'>{title}</div>
    </div>
  )
}

export default Button