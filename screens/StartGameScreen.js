import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Colors } from "../utils/colors";

const StartGameScreen = ({numberPickedHandler}) => {
  const [enteredNumber, setEnteredNumber] = useState(""); //since the number from keypad will also be a string

  const numberInputHandler = (entered) => {
    setEnteredNumber(entered);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    //logic to take in numbers only
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!!!", "Number has to be between 1 and 99.", [
        {
          text: "Ok",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    numberPickedHandler(chosenNumber)
  };

  return (
    <View style={styles.startContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton onPress={confirmInputHandler}>Start</CustomButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor:Colors.numberBox,
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6, //android specific property for shadow
  },
  textInput: {
    height: 70,
    fontSize: 32,
    borderBottomColor: Colors.textInputColor,
    borderBottomWidth: 2,
    color:Colors.textInputColor,
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
