import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
    const TESTID_container = "@ExpenseTracker_ListItem_Container";
    const TESTID_name = "@ExpenseTracker_ListItem_Name";
    const TESTID_amount = "@ExpenseTracker_ListItem_Amount";

    it("Renders the ListItem component", () => {
        const TEXT_name = "Test Name";
        let amountValue = 60;

        const { getByTestId } = render(
            <ListItem name={TEXT_name} amount={amountValue} />
        );

        const container = getByTestId(TESTID_container);
        expect(container).toBeTruthy();

        const name = getByTestId(TESTID_name);
        expect(name).toBeTruthy();
        expect(name).toHaveTextContent(TEXT_name);

        const amount = getByTestId(TESTID_amount);
        expect(amount).toBeTruthy();
        expect(amount).toHaveTextContent(`$${amountValue}`);

        // fire event - test update button
    });
});
