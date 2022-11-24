import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

const StartGameScreen = () => {
  return (
    <View style={styles.startContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
        <CustomButton>Reset</CustomButton>
        </View>
       <View style={styles.button}> 
        <CustomButton>Start</CustomButton>
       </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startContainer: {
    justifyContent:"center",
    alignItems:"center",
    padding: 24,
    backgroundColor: "#483d8b",
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6, //android specific property for shadow
  },
  textInput: {
    height: 70,
    fontSize: 32,
    borderBottomColor: "#ffe4e1",
    borderBottomWidth: 2,
    color: "#ffe4e1",
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttons:{
    flexDirection:"row",
  },
  button:{
  flex:1
  }
});
