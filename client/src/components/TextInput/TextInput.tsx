import React, { useState } from "react";

interface TextInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
}) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <div
            className="text-input-container"
            data-testid="@ExpenseTracker_TextInput_Container"
        >
            <label
                className="text-input-label"
                htmlFor="text-input"
                data-testid="@ExpenseTracker_TextInput_Label"
            >
                {label}
            </label>
            <input
                className="text-input"
                id="text-input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                data-testid="@ExpenseTracker_TextInput_Input"
            />
        </div>
    );
};

export default TextInput;
