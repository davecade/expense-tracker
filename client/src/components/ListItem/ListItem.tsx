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

    const icon = (() => {
        switch (name) {
            case "savings":
                return <span className="material-icons-round">savings</span>;

            case "uberTax":
                return (
                    <span className="material-icons-round">
                        delivery_dining
                    </span>
                );

            case "carExpenses":
                return <span className="material-icons-round">car_repair</span>;

            case "petrol":
                return (
                    <span className="material-icons-round">
                        local_gas_station
                    </span>
                );

            case "loans":
                return (
                    <span className="material-icons-round">credit_score</span>
                );
        }
    })();

    return (
        <div
            className="list-item-container"
            data-testid="@ExpenseTracker_ListItem_Container"
        >
            <div
                className="icon-container"
                data-testid="@ExpenseTracker_ListItem_icon"
            >
                {icon}
            </div>
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
