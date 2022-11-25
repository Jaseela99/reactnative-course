import { StyleSheet, View, TextInput, Alert,KeyboardAvoidingView,ScrollView} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Colors } from "../utils/colors";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import Title from "../components/Title";
const StartGameScreen = ({ numberPickedHandler }) => {
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
    numberPickedHandler(chosenNumber);
  };

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={styles.startContainer}>
    <Title>Game Of Numbers!!</Title>
    <Card>
      <CardTitle>Pick Your Number</CardTitle>
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
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;


const styles = StyleSheet.create({
  screen:{
    flex:1
  },
 startContainer:{
 flex:1,
 padding:20,
 alignItems:"center"
 },

  textInput: {
    height: 70,
    fontSize: 32,
    borderBottomColor: Colors.textInputColor,
    borderBottomWidth: 2,
    color: Colors.textInputColor,
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    fontFamily:"open-sans-bold"
  },
  buttons: {
    flexDirection: "row",
    padding: 16,
  },
  button: {
    flex: 1,
  },
});
