import React from "react";
import {
    savings_selector,
    carExpenses_selector,
    uberTax_selector,
    petrol_selector,
    loans_selector,
} from "../Atoms/Atoms";
import { useRecoilValue } from "recoil";

export const useGetExepnse = () => {
    const savings = useRecoilValue(savings_selector);
    const carExpense = useRecoilValue(carExpenses_selector);
    const uberTax = useRecoilValue(uberTax_selector);
    const petrol = useRecoilValue(petrol_selector);
    const loans = useRecoilValue(loans_selector);

    const getSavings = () => {
        return savings;
    };
    const getCarExpense = () => {
        return carExpense;
    };
    const getUberTax = () => {
        return uberTax;
    };
    const getPetrol = () => {
        return petrol;
    };
    const getLoans = () => {
        return loans;
    };

    return {
        getSavings,
        getCarExpense,
        getUberTax,
        getPetrol,
        getLoans,
    };
};
