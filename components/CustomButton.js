import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ children }) => {
  const pressHandler = () => {
    console.log("clicked");
  };
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#bc8f8f" }}
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
    backgroundColor: "#db7093",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
