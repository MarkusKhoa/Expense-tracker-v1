import React, {createContext, useReducer} from 'react'

const initialState = {
    incomeTransactions:[
        {id: 1, incomeText: "Salary", incomeAmount: 7000},
        {id: 2, incomeText: "House sold", incomeAmount: 400000},
        {id: 3, incomeText: "Freelancing projects", incomeAmount: 2000}
    ],
    expensesTransactions:[
        {id: 4, incomeText: "Shopping", incomeAmount: 2000},
        {id: 5, incomeText: "Restaurant", incomeAmount: 500},
        {id: 6, incomeText: "Clothes", incomeAmount: 1000},
        {id: 7, incomeText: "Entertainment", incomeAmount: 1500},
        {id: 8, incomeText: "New car", incomeAmount: 5000}
    ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{incomeTransactions:state.incomeTransactions,
            expenseTransactions:state.expenseTransactions}}>
            {children}
        </GlobalContext.Provider>
    )
}