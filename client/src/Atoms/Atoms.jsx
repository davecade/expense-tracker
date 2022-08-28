import { atom, selector } from "recoil";
import { getInitialDataAsync } from '../api/api'

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
        const response = await getInitialDataAsync();
        return response;
    },
    set: ({set}, initialData) => {
        set(savings, initialData.savings.total)
        set(carExpenses, initialData.carExpenses.total)
        set(uberTax, initialData.uberTax.total)
        set(petrol, initialData.petrol.total)
        set(loans, initialData.loans.total)
    }
});

export const totalInBank = selector({
    key: "TOTAL_IN_BANK",
    get: ({ get }) => {
        const allItemsTracking = [get(savings), get(carExpenses), get(uberTax), get(petrol), get(loans)]
        const sumOf = arr => arr.reduce((a,b) => a + b, 0)
        const result = sumOf(allItemsTracking)
        return result;
    },
});
