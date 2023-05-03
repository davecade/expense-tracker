import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
    const labelText = "Name";
    const value = "John";
    const onChange = jest.fn();
    const placeholderText = "Enter your name";

    beforeEach(() => {
        onChange.mockClear();
    });

    it("renders the label and input elements with the correct data-testid attributes", () => {
        render(
            <TextInput
                label={labelText}
                value={value}
                onChange={onChange}
                placeholder={placeholderText}
            />
        );
        expect(
            screen.getByTestId("@ExpenseTracker_TextInput_Container")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("@ExpenseTracker_TextInput_Label")
        ).toBeInTheDocument();
        expect(
            screen.getByTestId("@ExpenseTracker_TextInput_Input")
        ).toBeInTheDocument();
    });

    it("calls the onChange function when the input value changes", () => {
        render(
            <TextInput
                label={labelText}
                value={value}
                onChange={onChange}
                placeholder={placeholderText}
            />
        );
        const inputElement = screen.getByTestId(
            "@ExpenseTracker_TextInput_Input"
        );
        const newValue = "Jane";
        fireEvent.change(inputElement, { target: { value: newValue } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(newValue);
    });
});
