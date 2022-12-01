import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "./UI components/Input";
import CustomButton from "../components/UI components/CustomButton";
import { getFormattedDate } from "../util/date";

const ExpenseForm = ({cancelHandler,confirmHandler,submitButtonLabel,selectedExpense}) => {
  const [input, setInput] = useState({
    amount:selectedExpense ? selectedExpense.amount.toString() :"", //amount to string
    date: selectedExpense ? getFormattedDate(selectedExpense.date) :"", //formatted date
    description:selectedExpense ? selectedExpense.description :""
  });

  const inputChangedHandler = (inputIdentifier,enteredValue) => {
  setInput((curr)=>{
    return {...curr,
        //inputIdentifier can be amount date or description and entered value will be the corresponding values
     [inputIdentifier]:enteredValue
    }
  })
  };
 const onSubmit=()=>{
     const expenseData={
         amount:+input.amount, //+converts string to number
         date:new Date(input.date),
         description:input.description
        }
        confirmHandler(expenseData)

 }

  return (
    <View style={styles.Container}>
      <View style={styles.doubleContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this,"amount"),
            value:input.amount
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "default",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this,"date"),
            value:input.date
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          //autoCapitalize:"words" default is sentences
          //autoCorrect:true is default we could set it to false
          onChangeText: inputChangedHandler.bind(this,"description"),
          value:input.description
        }}
      />
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
});
