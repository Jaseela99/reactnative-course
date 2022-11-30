import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect,useContext } from "react";
import IconButton from "../components/UI components/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI components/CustomButton";
import { ExpensesContext } from "../store/expenses-context";
const ManageExpense = ({ route, navigation }) => {
  const expensesContext= useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; //!! converts id to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(editedExpenseId)
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if(isEditing){
     expensesContext.updateExpense(editedExpenseId,{description:"tested",amount:500,date:new Date("2022-12-10")})
    }else{
      expensesContext.addExpense({description:"test",amount:200,date:new Date("2022-12-20")})
    }
    navigation.goBack();
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
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
  button: {
    minWidth: 120,
    marginHorizontal: 20,
  },
});
