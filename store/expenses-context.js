import {createContext, useReducer} from "react"


const DUMMY_EXPENSES=[
    {
        id:'e1',
        description:"A Pair of shoes",
        amount:1059.99,
        date:new Date("2022-12-19")
    },
    {
        id:'e2',
        description:"electricity bill",
        amount:100,
        date:new Date("2022-12-01")
    },
    {
        id:'e3',
        description:"Wifi",
        amount:750,
        date:new Date("2022-12-02")
    },
    {
        id:'e4',
        description:"Purse",
        amount:599,
        date:new Date("2021-12-29")
    },
]

export const ExpensesContext=createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    updateExpense:(id)=>{},
    deleteExpense:(id,{description,amount,date})=>{}
    })
const expensesReducer=(state,action)=>{
  switch(action.type) {
    case "ADD":
        const id= new Date().toString() + Math.random().toString()
        return [{...action.payload,id:id},...state]
    case "UPDATE":
        const updatableExpenseIndex=state.findIndex((expense)=>expense.id===action.payload.id)
        const updatableExpense= state[updatableExpenseIndex]
        const updatedItem={...updatableExpense,...action.payload.data}
        const updatedExpenses=[...state]
        updatedExpenses[updatableExpenseIndex]=updatedItem
        return updatedExpenses
    case "DELETE":
        return state.filter((expense)=>expense.id!==action.payload)
        default:
            return state
  } 
}

const ExpensesContextProvider=({children})=>{
   const [expensesState,dispatch]= useReducer(expensesReducer,DUMMY_EXPENSES)

   const addExpense=(expenseData)=>{
    dispatch({type:"ADD",payload:expenseData})
   }
   const deleteExpense=(id)=>{
    dispatch({type:"DELETE",payload:id})
   }
   const updateExpense=(id,expenseData)=>{
    dispatch({type:"UPDATE",payload:{id:id,data:expenseData}})
   }

   const value={
    expenses:expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense
   }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider