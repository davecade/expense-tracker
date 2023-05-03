import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Main from "./Main";

describe("Main Component", () => {
    beforeEach(() => {
        render(
            <RecoilRoot>
                <Main />
            </RecoilRoot>
        );
    });

    it("renders the main container and its subcomponents", () => {
        const mainContainer = screen.getByTestId(
            "@ExpenseTracker_Main_Container"
        );
        expect(mainContainer).toBeInTheDocument();

        const headingContainer = screen.getByTestId(
            "@ExpenseTracker_Main_Heading"
        );
        expect(headingContainer).toBeInTheDocument();

        const userAccount = screen.getByTestId(
            "@ExpenseTracker_Main_User_Account"
        );
        expect(userAccount).toHaveTextContent("Dave Cadelina");

        const amountContainer = screen.getByTestId(
            "@ExpenseTracker_Main_Amount_Container"
        );
        expect(amountContainer).toBeInTheDocument();

        const amount = screen.getByTestId("@ExpenseTracker_Main_Amount");
        expect(amount).toBeInTheDocument();

        const listContainer = screen.getByTestId(
            "@ExpenseTracker_Main_List_Container"
        );
        expect(listContainer).toBeInTheDocument();
    });
});
