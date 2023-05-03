import React, { useState } from "react";
import "./Modal.scss";
import { T_ExpenseFields } from "../../Types/Types";
import { FieldDisplayName } from "../../Types/Enums";
import TextInput from "../TextInput/TextInput";

type ModalProps = {
    name: string;
    data: T_ExpenseFields;
    handleClose: () => any;
};

const Modal = ({ name, data, handleClose }: ModalProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <div
            className="modal-background"
            data-testid="@ExpenseTracker_Modal_Container"
        >
            <div className="modal" data-testid="@ExpenseTracker_Modal">
                <div className="modal-heading-container">
                    <h1
                        className="modal-heading"
                        data-testid="@ExpenseTracker_Modal_Heading"
                    >
                        {FieldDisplayName[name]}
                    </h1>
                    <div
                        className="close-button"
                        onClick={handleClose}
                        data-testid="@ExpenseTracker_Modal_CloseButton"
                    >
                        <span className="material-icons">close</span>
                    </div>
                </div>
                <div className="content-container">
                    <h1
                        className="total-amount"
                        data-testid="@ExpenseTracker_Modal_TotalAmount"
                    >
                        {data.total}
                    </h1>

                    <div
                        className="textInput-container"
                        data-testid="@ExpenseTracker_Modal_Transactions"
                    >
                        <TextInput
                            label={""}
                            value={inputValue}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
