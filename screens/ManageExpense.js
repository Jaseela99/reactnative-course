import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../components/UI components/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI components/CustomButton";
const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; //!! converts id to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {};
  const cancelHandler = () => {};
  const confirmHandler = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton  onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.primary450}
            size={24}
            onPress={() => {}}
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
  button:{
    minWidth:120,
    marginHorizontal:20  }
});
