import React from "react";
import "./ListItem.scss";
import Button from "../Button/Button";
import { useState } from "react";

const ListItem = ({ name, amount, setNewState }) => {
    const [showButtons, setShowButtons] = useState(true);
    const [showInputField, setShowInputField] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [currentInputAction, setCurrentInputAction] = useState(null);

    const formatNumber = number => {
        const result = Number(number)
        return result % 1 != 0 ? result.toFixed(2) : result
    }

    return (
        <div className="list-item-container">
            <div className="name">{name}</div>
            <div className="amount">{`$${formatNumber(amount)}`}</div>
            {showButtons && (
                <div className="buttons-container">
                    <Button
                        title={"+"}
                        color={"green"}
                        onClick={() => {
                            setShowButtons(false);
                            setShowInputField(true);
                            setCurrentInputAction("add");
                        }}
                    />
                    <Button
                        title={"-"}
                        color={"red"}
                        onClick={() => {
                            setShowButtons(false);
                            setShowInputField(true);
                            setCurrentInputAction("subtract");
                        }}
                    />
                </div>
            )}
            {showInputField && (
                <div className="input-container">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                    />
                    <Button
                        title={"-"}
                        color={"black"}
                        onClick={() => {
                            setShowButtons(true);
                            setShowInputField(false);
                            if (currentInputAction === "add") {
                                const newValue = amount + inputValue
                                setNewState(newValue);
                            } else if (currentInputAction === "subtract") {
                                setNewState(amount - inputValue);
                            }
                            setCurrentInputAction(null)
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ListItem;
