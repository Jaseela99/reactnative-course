import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

const CustomButton = ({ children,onPress }) => {
  
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.ripple }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 24,
  },
  innerButtonContainer: {
    backgroundColor: Colors.buttonColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily:"open-sans-bold",
    color: Colors.textColor,
  },
  pressed: {
    opacity: 0.75,
  },
});
