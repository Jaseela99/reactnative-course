import { StyleSheet, Button, View, TextInput, Modal } from "react-native";
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
        <TextInput
          value={inputText}
          placeholder="Enter your goal!!"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} />
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
    borderBottomWidth: 1,
    borderColor: "#c0c0c0",
    padding: 16,
  },
  input: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "100%",
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
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
});
