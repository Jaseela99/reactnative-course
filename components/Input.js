import { StyleSheet, Button, View, TextInput, Modal,Image } from "react-native";
import React, { useState } from "react";

const Input = ({ addGoalHandler, showModal, endAddGoalHandler }) => {
  const [inputText, setInputText] = useState("");
  const goalInputHandler = (inputText) => {
    setInputText(inputText);
  };
  const addGoal = () => {
    addGoalHandler(inputText);
    setInputText("");
  };
  const cancelGoal = () => {
    setInputText("");
    endAddGoalHandler();
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput
          value={inputText}
          placeholder="Enter your goal!!"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoal} color="#db7093"/>
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} color="#00ced1"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor:"#808080"
  },
  input: {
    borderColor: "#f0ffff",
    borderWidth: 1,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor:"#c0c0c0"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  }
});
