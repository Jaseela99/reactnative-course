import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, affordability, complexity, duration }) => {
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Pressable android_ripple={{color:""}}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}min</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default MealItem;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  innerContainer:{
   borderRadius:8,
   overflow:"hidden"
  },

  image: {
    width: "100%",
    height: windowHeight / 3,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
