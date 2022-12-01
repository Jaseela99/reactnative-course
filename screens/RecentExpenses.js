import React , { useContext,useEffect }from 'react'
import ExpensesCard from '../components/ExpensesCard'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { getExpenses } from '../util/http'

const RecentExpenses = () => {
  const expensesContext= useContext(ExpensesContext)
 useEffect(() => {
  const fetchExpenses=async()=>{   
   const expenses=await getExpenses()
   expensesContext.setExpenses(expenses)
  }
  fetchExpenses()
 }, [])
 
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
