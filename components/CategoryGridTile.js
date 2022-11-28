import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={({ pressed }) => [styles.pressable,pressed ? styles.press :null]}>
        <View style={[styles.gridInnerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    elevation: 2,
    borderRadius: 8,
    flex: 1,
    height: windowHeight / 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
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
