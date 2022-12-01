import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig ,style}) => {
  let inputStyle = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.labelMultiline);
  }
  return (
    <View style={[styles.inputContainer,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },

  input: {
    borderRadius: 6,
    padding: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
  label: {
    color: GlobalStyles.colors.primary400,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "500",
  },
  labelMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
