import React from "react";
import "./Main.styles.scss";
import ListItem from "../ListItem/ListItem";
import { useRecoilState } from "recoil";
import {
    totalInBank,
    savings,
    carExpenses,
    uberTax,
    petrol,
    loans,
} from "../../Atoms/Atoms";

const Main = () => {
    const [ totalInBankState, setTotalInBankState] = useRecoilState(totalInBank);
    const [ savingsState, setSavingsState ] = useRecoilState(savings);
    const [ carExpensesState, setCarExpensesState ] = useRecoilState(carExpenses);
    const [ uberTaxState, setUberTaxState ] = useRecoilState(uberTax);
    const [ petrolState, setPetrolState ] = useRecoilState(petrol);
    const [ loansState, setLoansState ] = useRecoilState(loans);

    return (
        <div className="main-container">
            <div className="heading-container">
                <h3>Category Name</h3>
                <h4 className="user-account">Dave Cadelina</h4>
            </div>

            <div className="amount-container">
                <h1 className="amount">{`$${totalInBankState}`}</h1>
                <p>Total in bank</p>
            </div>
            <div className="list-container">
                <div className="list-titles">
                    <h4 className="title">Tracking</h4>
                    <h4 className="title">Amount</h4>
                </div>
                <div className="list-items">
                    <ListItem name={"Savings"} amount={savingsState} setNewState={setSavingsState} />
                    <ListItem name={"Uber Tax"} amount={uberTaxState} setNewState={setUberTaxState} />
                    <ListItem name={"Car Expenses"} amount={carExpensesState} setNewState={setCarExpensesState} />
                    <ListItem name={"Petrol"} amount={petrolState} setNewState={setPetrolState} />
                    <ListItem name={"Loans"} amount={loansState} setNewState={setLoansState} />
                </div>
            </div>
        </div>
    );
};

export default Main;
