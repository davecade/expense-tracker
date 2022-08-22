import React from 'react'
import './ListItem.scss'

const ListItem = ({ name, amount }) => {
  return (
    <div className='list-item-container'>
      <div className="name">
        {name}
      </div>
      <div className="amount">
        {`$${amount}`}
      </div>
    </div>
  )
}

export default ListItem