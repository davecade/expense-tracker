export type T_UserData = {
    savings: T_ExpenseFields
    uberTax: T_ExpenseFields
    carExpenses: T_ExpenseFields
    petrol: T_ExpenseFields
    loans: T_ExpenseFields
}

export type T_ExpenseFields = {
    transactions: T_TransactionFields[],
    total: number
}

export type T_TransactionFields = {
    amount: number
    operation: 'add' | 'subtract'
    date: string
}