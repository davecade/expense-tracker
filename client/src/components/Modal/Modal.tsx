import React from "react";
import "./Modal.scss";

type ModalProps = {
    expenseType: string;
    handleClose: () => any;
};

const Modal = ({ expenseType, handleClose }: ModalProps) => {
    return (
        <div
            className="modal-background"
            data-testid="@ExpenseTracker_Modal_Container"
        >
            <div className="modal">
                <div className="modal-heading-container">
                    <h1 className="modal-heading">Update</h1>
                    <div className="close-button" onClick={handleClose}>
                        Close
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
