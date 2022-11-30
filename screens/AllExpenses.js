import React, { useContext } from 'react'
import ExpensesCard from '../components/ExpensesCard'
import { ExpensesContext } from '../store/expenses-context'

const AllExpenses = () => {
  const expensesContext= useContext(ExpensesContext)
  return (
     <ExpensesCard periodName="Total" expenses={expensesContext?.expenses}/>
  )
}

export default AllExpenses
