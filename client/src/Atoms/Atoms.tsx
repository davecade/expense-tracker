import { atom, selector } from "recoil";
import { T_UserData, T_TransactionFields } from '../Types/Types'

export const UserData = atom<T_UserData>({
    key: "@ExpenseTracker_USER_DATA",
    default: {
        savings: {
            transactions: [] as T_TransactionFields[],
            total: 0
        },
        uberTax: {
            transactions: [] as T_TransactionFields[],
            total: 0
        },
        carExpenses: {
            transactions: [] as T_TransactionFields[],
            total: 0
        },
        petrol: {
            transactions: [] as T_TransactionFields[],
            total: 0
        },
        loans: {
            transactions: [] as T_TransactionFields[],
            total: 0
        }
    }
})

export const savings = selector({
    key: "SAVINGS",
    get: ({get}) => {
        const userData = get(UserData)
        return userData.savings
    },
    set: ({get, set}, newVal) => {
        const userData: T_UserData = get<T_UserData>(UserData)
        const newUpdate: T_UserData = {...userData, savings: {
            transactions: newVal.transactions,
            total: newVal.total
        }}
        set<T_UserData>(UserData, newUpdate)
    }
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

// export const getInitialData = selector({
//     key: "GET_INITIAL_DATA",
//     get: async () => {
//         const response = await getInitialDataAsync();
//         return response;
//     },
//     set: ({set}, initialData) => {
//         set(savings, initialData.savings.total)
//         set(carExpenses, initialData.carExpenses.total)
//         set(uberTax, initialData.uberTax.total)
//         set(petrol, initialData.petrol.total)
//         set(loans, initialData.loans.total)
//     }
// });

export const totalInBank = selector({
    key: "TOTAL_IN_BANK",
    get: ({ get }) => {
        const allItemsTracking = [get(savings), get(carExpenses), get(uberTax), get(petrol), get(loans)]
        const sumOf = arr => arr.reduce((a,b) => a + b, 0)
        const result = sumOf(allItemsTracking)
        return result;
    },
});
