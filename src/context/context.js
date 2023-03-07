import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) =>
{
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //action creators
  const deleteTransaction = (id) =>
  {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }
  
   const addTransaction = (transaction) =>
  {
    dispatch({ type: 'ADD_TRANSACTION', payload:  transaction});
  }

  const balance = transactions.reduce((acc, currval) => (currval.type ==='Expense'? acc - currval.amount: acc + currval.amount), 0);


    return (

      <ExpenseTrackerContext.Provider value={{
        deleteTransaction,
        addTransaction,
        transactions,
         balance,
        }}>
          {children}  
        </ExpenseTrackerContext.Provider>
    )  
}