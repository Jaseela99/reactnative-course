import { StyleSheet, Button, View ,TextInput} from "react-native";
import React,{useState} from "react"

const Input = ({addGoalHandler}) => {

  const[inputText,setInputText]=useState("")
  const goalInputHandler=(inputText)=>{
    setInputText(inputText)
   }
   const addGoal=()=>{
    addGoalHandler(inputText)
    setInputText("")
   }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputText}
        placeholder="Enter your goal!!"
        style={styles.input}
        onChangeText={goalInputHandler}
      />
      <Button title="add goal" onPress={addGoal} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#c0c0c0",
  },
  input: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "70%",
    marginRight: 10,
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
  },
});
