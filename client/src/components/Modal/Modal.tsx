import React from "react";
import "./Modal.scss";
import { T_ExpenseFields } from "../../Types/Types";
import { FieldDisplayName } from "../../Types/Enums";

type ModalProps = {
    name: string;
    data: T_ExpenseFields;
    handleClose: () => any;
};

const Modal = ({ name, data, handleClose }: ModalProps) => {
    console.log("data", data);
    return (
        <div
            className="modal-background"
            data-testid="@ExpenseTracker_Modal_Container"
        >
            <div className="modal">
                <div className="modal-heading-container">
                    <h1 className="modal-heading">{FieldDisplayName[name]}</h1>
                    <div className="close-button" onClick={handleClose}>
                        Close
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
