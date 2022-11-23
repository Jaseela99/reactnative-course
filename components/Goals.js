import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Goals = ({itemData}) => {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#5f9ea0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  goalText: {
    color: "#ffffff",
  },
});
