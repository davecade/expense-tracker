import React from 'react'
import './Main.styles.scss'
import ListItem from '../ListItem/ListItem'
import { useRecoilValue } from 'recoil'
import { AmountState, Savings, CarExpenses } from '../../Atoms/Atoms'

const Main = () => {
  const amount = useRecoilValue(AmountState)
  const savings = useRecoilValue(Savings)
  const carExpenses = useRecoilValue(CarExpenses)

  return (
    <div className="main-container">
        <div className="heading-container">
          <h3>Category Name</h3>
          <h4 className="user-account">
            Dave Cadelina
          </h4>
        </div>

        <div className="amount-container">
            <h1 className="amount">{`$${amount}`}</h1>
            <p>Total in bank</p>
        </div>
        <div className="list-container">
          <div className="list-titles">
            <h4 className='title'>Tracking</h4>
            <h4 className='title'>Amount</h4>
          </div>
          <div className="list-items">
            <ListItem name={"Savings"} amount={savings} />
            <ListItem name={"Uber Tax"} amount={carExpenses} />
            <ListItem name={"Car Expenses"} amount={carExpenses} />
            <ListItem name={"Petrol"} amount={carExpenses} />
            <ListItem name={"Loans"} amount={carExpenses} />
          </div>
        </div>
    </div>
  )
}

export default Main