import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
    const TESTID_container = "@ExpenseTracker_Modal_Container";

    it("Renders the Modal component", () => {
        const handleClose = jest.fn();
        const mockData = {
            transactions: [],
            total: 60,
        };

        const { getByTestId } = render(
            <Modal name={"Dave"} data={mockData} handleClose={handleClose} />
        );

        const container = getByTestId(TESTID_container);
        expect(container).toBeTruthy();
    });
});
