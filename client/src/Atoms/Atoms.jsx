import { atom, selector } from "recoil";
import axios from "axios";

export const savings = atom({
    key: "SAVINGS",
    default: 0,
});

export const carExpenses = atom({
    key: "CAR_EXPENSES",
    default: 0,
});

export const uberTax = atom({
    key: "UBER_TAX",
    default: 0,
});

export const petrol = atom({
    key: "PETROL",
    default: 0,
});

export const loans = atom({
    key: "LOANS",
    default: 0,
});

export const getInitialData = selector({
    key: "GET_INITIAL_DATA",
    get: async () => {
        const response = await axios.get(`/initialData`);
        return response.data.response;
    },
});

export const totalInBank = selector({
    key: "TOTAL_IN_BANK",
    get: ({ get }) => {
        const result =
            get(savings) +
            get(carExpenses) +
            get(uberTax) +
            get(petrol) +
            get(loans);
        return result;
    },
});
