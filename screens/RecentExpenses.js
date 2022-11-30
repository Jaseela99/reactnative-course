import React , { useContext }from 'react'
import ExpensesCard from '../components/ExpensesCard'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'

const RecentExpenses = () => {
  const expensesContext= useContext(ExpensesContext)

  const recentExpenses=expensesContext.expenses.filter((expense)=>{
    const today=new Date()
    const date7DaysAgo=getDateMinusDays(today,7)
    return (expense.date>date7DaysAgo) && (expense.date<=today)
  })
  return (
      <ExpensesCard periodName="Last 7 days" fallBackText={"No expenses for past 7 days!"} expenses={recentExpenses}/>
  )
}

export default RecentExpenses
