import React, { useContext, useEffect } from 'react'
import ExpensesCard from '../components/ExpensesCard'
import { ExpensesContext } from '../store/expenses-context'
import { getExpenses } from '../util/http'

const AllExpenses = () => {
  const expensesContext= useContext(ExpensesContext)
  useEffect(() => {
    const fetchExpenses=async()=>{   
     const expenses=await getExpenses()
     expensesContext.setExpenses(expenses)
    }
    fetchExpenses()
   }, [])
  return (
     <ExpensesCard periodName="Total" fallBackText={"No registered Expenses Found! "} expenses={expensesContext.expenses}/>
  )
}

export default AllExpenses
