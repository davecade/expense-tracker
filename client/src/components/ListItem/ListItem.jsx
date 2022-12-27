import React from "react";
import "./ListItem.scss";
import Button from "../Button/Button";
import { useState } from "react";
import Modal from '../Modal/Modal'

const ListItem = ({ name, amount, setNewState }) => {
    const [enableModal, setEnableModal] = useState(false);

    const formatNumber = number => {
        const result = Number(number)
        return result % 1 !== 0 ? result.toFixed(2) : result
    }

    return (
        <div className="list-item-container">
            <div className="name">{name}</div>
            <div className="amount">{`$${formatNumber(amount)}`}</div>
            <Button
                title={"Update"}
                onClick={() => {
                    setEnableModal(true)
                }}
            />
            {enableModal && <Modal />}
        </div>
    );
};

export default ListItem;
