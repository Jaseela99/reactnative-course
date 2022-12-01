import React, { useContext, useEffect, useState } from "react";
import ExpensesCard from "../components/ExpensesCard";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI components/LoadingOverlay";
import ErrorOverlay from "../components/UI components/ErrorOverlay";

const RecentExpenses = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const expenses = await getExpenses();
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setError("cannot get expenses try again !!");
      }
      setLoading(false);
    };
    fetchExpenses();
  }, []);

 
  if (error && !loading) {
    return <ErrorOverlay message={error}  />;
  }
  
  if (loading) {
    return <LoadingOverlay />;
  }


  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesCard
      periodName="Last 7 days"
      fallBackText={"No expenses for past 7 days!"}
      expenses={recentExpenses}
    />
  );
};

export default RecentExpenses;
