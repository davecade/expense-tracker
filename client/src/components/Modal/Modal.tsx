import React from "react";
import "./Modal.scss";

type ModalProps = {
    expenseType: string;
    handleClose: () => any;
};

const Modal = ({ expenseType }: ModalProps) => {
    return (
        <div className="modal-background">
            <div className="modal">
                <h1 className="modal-heading">Update</h1>
            </div>
        </div>
    );
};

export default Modal;
