import { StyleSheet, Text, ScrollView ,View,TextInput} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const changeTitleHandler = () => {
    setEnteredTitle();
  };
  return (
    <ScrollView style={styles.formContainer}>
      <View >
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color:colors.primary800
  },
  input: {
    marginVertical:8,
    paddingHorizontal:4,
    paddingVertical:8,
    fontSize:16,
    borderBottomColor:colors.primary800,
    borderBottomWidth:2,
    backgroundColor:colors.primary100,
    borderRadius:8
  },
});
