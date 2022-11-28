import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AboutMeal from "./AboutMeal";

const MealItem = ({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) => {
  const navigation = useNavigation();
  const onMealPress = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Pressable android_ripple={{ color: "" }} onPress={onMealPress}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <AboutMeal
          affordability={affordability} duration={duration} complexity={complexity} />
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
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
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
  
});
