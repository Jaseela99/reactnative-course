import React , { useContext,useEffect,useState }from 'react'
import ExpensesCard from '../components/ExpensesCard'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { getExpenses } from '../util/http'
import LoadingOverlay from "../components/UI components/LoadingOverlay"
const RecentExpenses = () => {
  const [loading, setLoading] = useState(true)
  const expensesContext= useContext(ExpensesContext)
 useEffect(() => {
  const fetchExpenses=async()=>{   
    setLoading(true)
   const expenses=await getExpenses()
   setLoading(false)
   expensesContext.setExpenses(expenses)
  }
  fetchExpenses()
 }, [])
 if(loading){
  return <LoadingOverlay/>
 }
 
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
