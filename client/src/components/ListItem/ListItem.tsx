import React from "react";
import "./ListItem.scss";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

type ListItemProps = {
    name: string;
    amount: number;
};

const ListItem = ({ name, amount }: ListItemProps) => {
    const [enableModal, setEnableModal] = useState(false);

    const formatNumber = (number) => {
        const result = Number(number);
        return result % 1 !== 0 ? result.toFixed(2) : result;
    };

    const capitalizeFirstLetter = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div
            className="list-item-container"
            data-testid="@ExpenseTracker_ListItem_Container"
        >
            <div className="name" data-testid="@ExpenseTracker_ListItem_Name">
                {capitalizeFirstLetter(name)}
            </div>
            <div
                className="amount"
                data-testid="@ExpenseTracker_ListItem_Amount"
            >{`$${formatNumber(amount)}`}</div>
            <Button
                title={"Update"}
                onClick={() => {
                    setEnableModal(true);
                }}
            />
            {enableModal && (
                <Modal
                    expenseType={name}
                    handleClose={() => setEnableModal(false)}
                />
            )}
        </div>
    );
};

export default ListItem;
