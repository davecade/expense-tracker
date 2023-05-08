import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import { T_ExpenseFields } from "../../Types/Types";

describe("Modal Component", () => {
    const testName: string = "savings";
    const testData: T_ExpenseFields = { transactions: [], total: 100 };
    const handleCloseMock = jest.fn();

    beforeEach(() => {
        render(
            <Modal
                name={testName}
                data={testData}
                isOpen={true}
                handleClose={handleCloseMock}
            />
        );
    });

    it("renders the modal container, modal, heading, and total amount", () => {
        const modalContainer = screen.getByTestId(
            "@ExpenseTracker_Modal_Container"
        );
        expect(modalContainer).toBeInTheDocument();

        const modal = screen.getByTestId("@ExpenseTracker_Modal");
        expect(modal).toBeInTheDocument();

        const modalHeading = screen.getByTestId(
            "@ExpenseTracker_Modal_Heading"
        );
        expect(modalHeading).toHaveTextContent("Savings");

        const totalAmount = screen.getByTestId(
            "@ExpenseTracker_Modal_TotalAmount"
        );
        expect(totalAmount).toHaveTextContent("100");
    });

    it("handles the close button click", () => {
        const closeButton = screen.getByTestId(
            "@ExpenseTracker_Modal_CloseButton"
        );
        fireEvent.click(closeButton);
        expect(handleCloseMock).toHaveBeenCalledTimes(1);
    });
});
