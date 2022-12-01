import { Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "./UI components/Input";
import CustomButton from "../components/UI components/CustomButton";
import { getFormattedDate } from "../util/date";
import { GlobalStyles } from "../constants/styles";

const ExpenseForm = ({
  cancelHandler,
  confirmHandler,
  submitButtonLabel,
  selectedExpense,
}) => {
  const [input, setInput] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid:true,
    }, //amount to string
    date: {
      value: selectedExpense ? getFormattedDate(selectedExpense.date) : "",
      isValid:true,
    }, //formatted date
    description: {
      value: selectedExpense ? selectedExpense.description : "",
      isValid:true,
    },
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInput((curr) => {
      return {
        ...curr,
        //inputIdentifier can be amount date or description and entered value will be the corresponding values
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };
  const onSubmit = () => {
    const expenseData = {
      amount: +input.amount.value, //+converts string to number
      date: new Date(input.date.value),
      description: input.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0; //amount must be a number and greater than 0
    const dateIsValid = expenseData.date.toString() !== "Invalid Date"; //if we pass anything other than date to newDate() it returns invalid date , so we can its validity using that
    const descriptionIsValid = expenseData.description.trim().length > 0; //if we trim the white spaces then the string should have length
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInput((curr) => {
        return {
          amount: { value: curr.amount.value, isValid: amountIsValid },
          date: { value: curr.date.value, isValid: dateIsValid },
          description: {
            value: curr.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    } else {
      confirmHandler(expenseData);
    }
  };

  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;

  return (
    <View style={styles.Container}>
      <View style={styles.doubleContainer}>
        <Input
          label="Amount"
          inValid={!input.amount.isValid}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: input.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          inValid={!input.date.isValid}
          textInputConfig={{
              keyboardType: "default",
              placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: input.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        inValid={!input.description.isValid}
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          //autoCapitalize:"words" default is sentences
          //autoCorrect:true is default we could set it to false
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: input.description.value,
        }}
      />
      {formIsInvalid && <Text style={styles.error}>Invalid input values - please check your inputs</Text>}
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={onSubmit} style={styles.button}>
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  Container: {
    marginBottom: 16,
  },
  doubleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 20,
  },
  error:{
    color:GlobalStyles.colors.error150,
    fontSize:18,
    fontWeight:"bold",
    paddingVertical:10,
    textAlign:"center"
  }
});
