import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { RecoilRoot } from "recoil";

describe("Button Component", () => {
    const TESTID_container = "@ExpenseTracker_Button_Container";
    const TESTID_title = "@ExpenseTracker_Button_Title";

    it("Renders the Button component", () => {
        const TEXT_title = "Test Button Title";

        const onClick = jest.fn();

        const { getByTestId } = render(
            <RecoilRoot>
                <Button title={TEXT_title} onClick={onClick} />
            </RecoilRoot>
        );

        const container = getByTestId(TESTID_container);
        expect(container).toBeTruthy();

        const title = getByTestId(TESTID_title);
        expect(title).toHaveTextContent(TEXT_title);

        fireEvent.click(container);
        expect(onClick).toBeCalledTimes(1);
    });
});
