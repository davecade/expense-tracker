import React from 'react'
import './ListItem.scss'
import Button from '../Button/Button'

const ListItem = ({ name, amount }) => {
  return (
    <div className='list-item-container'>
      <div className="name">
        {name}
      </div>
      <div className="amount">
        {`$${amount}`}
      </div>
      <Button title={"+"} color={"green"} />
      <Button title={"-"} color={"red"} />
    </div>
  )
}

export default ListItem