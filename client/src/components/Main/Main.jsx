import React from 'react'
import './Main.styles.scss'
import ListItem from '../ListItem/ListItem'

const Main = () => {
  return (
    <div className="main-container">
        <div className="heading-container">
          <h3>Category Name</h3>
          <h4 className="user-account">
            Dave Cadelina
          </h4>
        </div>

        <div className="total-amount-container">
            <h1 className="total-amount">$2000</h1>
            <p>Total in bank</p>
        </div>
        <div className="list-container">
          <div className="list-titles">
            <h4>Tracking</h4>
            <h4>Amount</h4>
          </div>
          <div className="list-items">
            <ListItem />
          </div>
        </div>
    </div>
  )
}

export default Main