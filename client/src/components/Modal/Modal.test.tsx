import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
    const TESTID_container = "@ExpenseTracker_Modal_Container";

    it("Renders the Modal component", () => {
        const handleClose = jest.fn();

        const { getByTestId } = render(
            <Modal expenseType={"Dave"} handleClose={handleClose} />
        );

        const container = getByTestId(TESTID_container);
        expect(container).toBeTruthy();
    });
});
