import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Goals = ({ itemData, deleteGoalHandler }) => {

  const deleteGoal=()=>{
    deleteGoalHandler(itemData.item.id)
  }
  return (
    <View style={styles.goalContainer}>
      <Pressable
        android_ripple={{ color: "#008080" }}
        onPress={deleteGoal} /* style={({pressed})=>pressed && styles.pressedItem } */
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#5f9ea0",
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  goalText: {
    padding: 10,
    color: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
