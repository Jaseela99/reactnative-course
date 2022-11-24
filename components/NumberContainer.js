import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.numberBox,
    padding: 24,
    borderRadius: 8,
    margin:24,
    alignItems:"center",
    justifyContent:"center"
  },
  numberText:{
    color:Colors.numberBox,
    fontSize:36,
    fontWeight:"bold"
  }
});
