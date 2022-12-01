import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "./UI components/Input";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    amount:"",
    date:"",
    description:""
  });

  const inputChangedHandler = (inputIdentifier,enteredValue) => {
  setInput((curr)=>{
    return {...curr,
        //inputIdentifier can be amount date or description and entered value will be the corresponding values
     [inputIdentifier]:enteredValue
    }
  })
  };
 

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
});
