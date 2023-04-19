import React from "react";
import "./Main.styles.scss";
import ListItem from "../ListItem/ListItem";
import { useRecoilValue } from "recoil";
import { UserData, totalInBank_selector } from "../../Atoms/Atoms";

const Main = () => {
    const userData = useRecoilValue(UserData);
    const totalInBankState = useRecoilValue(totalInBank_selector);

    const formatNumber = (number) => {
        const result = Number(number);
        return result % 1 !== 0 ? result.toFixed(2) : result;
    };

    return (
        <div className="main-container">
            <div className="heading-container">
                <h3>Category Name</h3>
                <h4 className="user-account">Dave Cadelina</h4>
            </div>

            <div className="amount-container">
                <h1 className="amount">{`$${formatNumber(
                    totalInBankState
                )}`}</h1>
                <p>Total in bank</p>
            </div>
            <div className="list-container">
                <div className="list-titles">
                    <h4 className="title">Tracking</h4>
                    <h4 className="title">Amount</h4>
                </div>
                <div className="list-items">
                    {Object.keys(userData).map((field, i) => (
                        <ListItem
                            key={i}
                            name={field}
                            amount={userData[field].total}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
