import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useContext ,useState} from "react";
import IconButton from "../components/UI components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm";
import { createExpense, updateExpense ,deleteExpense} from "../util/http";
import LoadingOverlay from "../components/UI components/LoadingOverlay"
import ErrorOverlay from "../components/UI components/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  const expensesContext = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; //!! converts id to boolean to decide whether to add or update

  //to get the existing value on input while updating
  const selectedExpense=expensesContext.expenses.find((expense)=>
  expense.id === editedExpenseId)

  //header for edit and update
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async() => {
    setLoading(true)
    try {
      await deleteExpense(editedExpenseId)
       expensesContext.deleteExpense(editedExpenseId);
      
    } catch (error) {
      setError("could not delete expense -try again later!!")
      setLoading(false)
    }
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
 

  const confirmHandler =async (expenseData) => {
    setLoading(true)
    try {   
      if (isEditing) {
        expensesContext.updateExpense(editedExpenseId,expenseData);
        await updateExpense(editedExpenseId,expenseData)
      } else {
       const id =await createExpense(expenseData)
        expensesContext.addExpense({...expenseData,id:id});
      }
    } catch (error) {
      setError("cannot save the data - some error occurred")
      setLoading(false)
    }
    navigation.goBack();
  };

  if(loading){
    return <LoadingOverlay/>
   }
   if (error && !loading) {
    return <ErrorOverlay message={error}/>;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm cancelHandler={cancelHandler}
       confirmHandler={confirmHandler} 
       submitButtonLabel={isEditing ? "Update" : "Add"}
       selectedExpense={selectedExpense}/>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.primary450}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary400,
    alignItems: "center",
  },
});
