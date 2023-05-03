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
    const TESTID_icon = "@ExpenseTracker_ListItem_icon";

    it("Renders the ListItem component and clicks update button", () => {
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

        const amount = getByTestId(TESTID_amount);
        expect(amount).toBeTruthy();
        expect(amount).toHaveTextContent(`60`);

        const updateButton = getByTestId(TESTID_updateButton);
        expect(updateButton).toBeTruthy();
        fireEvent.click(updateButton);

        const modal = getByTestId(TESTID_modal);
        expect(modal).toBeTruthy();
    });

    const testData = [
        { name: "savings", icon: "savings" },
        { name: "uberTax", icon: "delivery_dining" },
        { name: "carExpenses", icon: "car_repair" },
        { name: "petrol", icon: "local_gas_station" },
        { name: "loans", icon: "credit_score" },
    ];

    testData.forEach(({ name, icon }) => {
        it(`tests if ${name} icon and display name is correctly shown`, () => {
            const mockData = {
                transactions: [],
                total: 60,
            };

            const { getByTestId } = render(
                <ListItem name={name} data={mockData} />
            );
            const iconElement = getByTestId(TESTID_icon);
            expect(iconElement).toBeTruthy();
            expect(iconElement).toHaveTextContent(icon);

            const FieldName = getByTestId(TESTID_name);
            expect(FieldName).toBeTruthy();
            expect(FieldName).toHaveTextContent(FieldDisplayName[name]);
        });
    });
});
