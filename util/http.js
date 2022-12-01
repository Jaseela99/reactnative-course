import axios from "axios";

const URL=  "https://react-native-course-bafab-default-rtdb.firebaseio.com"

export const createExpense = (expenseData) => {
  axios.post(
    `${URL}/expenses.json`,
    expenseData
  );
};

export const getExpenses=async()=>{
  const response= await axios.get( `${URL}/expenses.json`)
  const expenses=[]
  console.log(response.data)
  for (const key in response.data){
    const expense={
        id:key ,
        amount:response.data[key].amount,
        date:new Date(response.data[key].date), //converting string to date object
        description:response.data[key].description
    }
    expenses.push(expense)
  }
  return expenses
}