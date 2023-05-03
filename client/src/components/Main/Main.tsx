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
        <div
            className="main-container"
            data-testid="@ExpenseTracker_Main_Container"
        >
            <div
                className="heading-container"
                data-testid="@ExpenseTracker_Main_Heading"
            >
                <h3>Category Name</h3>
                <h4
                    className="user-account"
                    data-testid="@ExpenseTracker_Main_User_Account"
                >
                    Dave Cadelina
                </h4>
            </div>

            <div
                className="amount-container"
                data-testid="@ExpenseTracker_Main_Amount_Container"
            >
                <h1
                    className="amount"
                    data-testid="@ExpenseTracker_Main_Amount"
                >{`$${formatNumber(totalInBankState)}`}</h1>
                <p>Total in bank</p>
            </div>
            <div
                className="list-container"
                data-testid="@ExpenseTracker_Main_List_Container"
            >
                <div className="list-titles">
                    <span
                        className="material-icons"
                        style={{ visibility: "hidden" }}
                    >
                        savings
                    </span>
                    <h4 className="title">Tracking</h4>
                    <h4 className="title">Amount</h4>
                </div>
                <div className="list-items">
                    {Object.keys(userData).map((field: string, i) => (
                        <ListItem key={i} name={field} data={userData[field]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
