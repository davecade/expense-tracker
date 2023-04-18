import { atom, selector } from "recoil";
import { T_UserData, T_TransactionFields } from '../Types/Types'
import { guardRecoilDefaultValue } from '../Utils/guard'

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
    key: "@ExpenseTracker_SAVINGS",
    get: ({get}) => {
        const userData = get(UserData)
        if(!userData?.savings) return {transactions: [], total: 0}
        return userData.savings
    },
    set: ({get, set}, newVal) => {
        if (guardRecoilDefaultValue(newVal)) return
        const userData: T_UserData = get(UserData)
        const newUpdate: T_UserData = {...userData, savings: newVal}
        set(UserData, newUpdate)
    }
});

export const carExpenses = selector({
    key: "@ExpenseTracker_CAR_EXPENSES",
    get: ({get}) => {
        const userData = get(UserData)
        if(!userData?.carExpenses) return {transactions: [], total: 0}
        return userData.carExpenses
    },
    set: ({get, set}, newVal) => {
        if (guardRecoilDefaultValue(newVal)) return
        const userData: T_UserData = get(UserData)
        const newUpdate: T_UserData = {...userData, carExpenses: newVal}
        set(UserData, newUpdate)
    }
});

export const uberTax = selector({
    key: "@ExpenseTracker_UBER_TAX",
    get: ({get}) => {
        const userData = get(UserData)
        if(!userData?.uberTax) return {transactions: [], total: 0}
        return userData.uberTax
    },
    set: ({get, set}, newVal) => {
        if (guardRecoilDefaultValue(newVal)) return
        const userData: T_UserData = get(UserData)
        const newUpdate: T_UserData = {...userData, uberTax: newVal}
        set(UserData, newUpdate)
    }
});

export const petrol = selector({
    key: "@ExpenseTracker_PETROL",
    get: ({get}) => {
        const userData = get(UserData)
        if(!userData?.petrol) return {transactions: [], total: 0}
        return userData.petrol
    },
    set: ({get, set}, newVal) => {
        if (guardRecoilDefaultValue(newVal)) return
        const userData: T_UserData = get(UserData)
        const newUpdate: T_UserData = {...userData, petrol: newVal}
        set(UserData, newUpdate)
    }
});

export const loans = selector({
    key: "@ExpenseTracker_LOANS",
    get: ({get}) => {
        const userData = get(UserData)
        if(!userData?.loans) return {transactions: [], total: 0}
        return userData.loans
    },
    set: ({get, set}, newVal) => {
        if (guardRecoilDefaultValue(newVal)) return
        const userData: T_UserData = get(UserData)
        const newUpdate: T_UserData = {...userData, loans: newVal}
        set(UserData, newUpdate)
    }
});

export const totalInBank = selector({
    key: "@ExpenseTracker_TOTAL_IN_BANK",
    get: ({ get }) => {
        const allItemsTracking = [get(savings).total, get(carExpenses).total, get(uberTax).total, get(petrol).total, get(loans).total]
        const sumOf = arr => arr.reduce((a,b) => a + b, 0)
        const result = sumOf(allItemsTracking)
        return result;
    },
});
