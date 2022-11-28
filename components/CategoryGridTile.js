import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardWrapper from "./CardWrapper";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <CardWrapper>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.press : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.gridInnerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </CardWrapper>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  press: {
    opacity: 0.75,
  },
  gridInnerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
