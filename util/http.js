import axios from "axios";

const URL=  "https://react-native-course-bafab-default-rtdb.firebaseio.com"

export const createExpense =async (expenseData) => {
const response=await axios.post(
    `${URL}/expenses.json`,
    expenseData
  );
 const id= response.data.name //get hold of the id created by firebase
 return id
};

export const getExpenses=async()=>{
  const response= await axios.get( `${URL}/expenses.json`)
  const expenses=[]
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

export const updateExpense=(id,expenseData)=>{
 return axios.put(`${URL}/expenses/${id}.json`,expenseData)
}
export const deleteExpense=(id)=>{
return axios.delete(`${URL}/expenses/${id}.json`)
}