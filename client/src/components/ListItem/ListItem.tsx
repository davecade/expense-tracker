import React from "react";
import "./ListItem.scss";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { T_ExpenseFields } from "../../Types/Types";
import { FieldDisplayName } from "../../Types/Enums";

type ListItemProps = {
    name: string;
    data: T_ExpenseFields;
};

const ListItem = ({ name, data }: ListItemProps) => {
    const [enableModal, setEnableModal] = useState(false);
    const { total } = data;

    const formatNumber = (number: string | number): string | number => {
        const result = Number(number);
        return result % 1 !== 0 ? result.toFixed(2) : result;
    };

    return (
        <div
            className="list-item-container"
            data-testid="@ExpenseTracker_ListItem_Container"
        >
            <div className="name" data-testid="@ExpenseTracker_ListItem_Name">
                {FieldDisplayName[name]}
            </div>
            <div
                className="amount"
                data-testid="@ExpenseTracker_ListItem_Amount"
            >{`$${formatNumber(total)}`}</div>
            <Button
                title={"Update"}
                onClick={() => {
                    setEnableModal(true);
                }}
            />
            {enableModal && (
                <Modal
                    name={name}
                    data={data}
                    handleClose={() => setEnableModal(false)}
                />
            )}
        </div>
    );
};

export default ListItem;
