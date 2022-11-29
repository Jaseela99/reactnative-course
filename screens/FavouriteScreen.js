import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummyData";

const FavouriteScreen = () => {
  const favMealsContext = useContext(FavouritesContext);
  const favMeals = MEALS.filter((meal) =>
    favMealsContext.ids.includes(meal.id)
  );
  if (favMeals.length == 0) {
    return <Text style={styles.FavText}> No Favourite Meals Yet</Text>;
  }
  return <MealsList items={favMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  FavText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
});
