import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListItem from "./ListItem";
import { FieldDisplayName } from "../../Types/Enums";

describe("ListItem Component", () => {
    const TESTID_container = "@ExpenseTracker_ListItem_Container";
    const TESTID_name = "@ExpenseTracker_ListItem_Name";
    const TESTID_amount = "@ExpenseTracker_ListItem_Amount";
    const TESTID_updateButton = "@ExpenseTracker_Button_Container";
    const TESTID_modal = "@ExpenseTracker_Modal_Container";

    it("Renders the ListItem component", () => {
        const TEXT_name = "savings";
        const mockData = {
            transactions: [],
            total: 60,
        };

        const { getByTestId } = render(
            <ListItem name={TEXT_name} data={mockData} />
        );

        const container = getByTestId(TESTID_container);
        expect(container).toBeTruthy();

        const name = getByTestId(TESTID_name);
        expect(name).toBeTruthy();
        expect(name).toHaveTextContent(FieldDisplayName[TEXT_name]);

        const amount = getByTestId(TESTID_amount);
        expect(amount).toBeTruthy();
        expect(amount).toHaveTextContent(`60`);

        const updateButton = getByTestId(TESTID_updateButton);
        expect(updateButton).toBeTruthy();
        fireEvent.click(updateButton);

        const modal = getByTestId(TESTID_modal);
        expect(modal).toBeTruthy();
    });
});
