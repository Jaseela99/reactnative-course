import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI components/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm";
import { createExpense } from "../util/http";

const ManageExpense = ({ route, navigation }) => {
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

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler =async (expenseData) => {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseId,expenseData);
    } else {
     const id =await createExpense(expenseData)
      expensesContext.addExpense({...expenseData,id:id});
    }
    navigation.goBack();
  };

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
