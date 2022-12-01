import axios from "axios";

export const createExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-bafab-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};
