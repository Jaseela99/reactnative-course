import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummyData";
import AboutMeal from "../components/AboutMeal";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
const MealDetailsScreen = ({ route, navigation }) => {


  const favouriteMealsContext = useContext(FavouritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavMeal = favouriteMealsContext.ids.includes(mealId);


  const changeFavStatusHandler= () => {
   if(isFavMeal){
    favouriteMealsContext.removeFavourite(mealId)
   }else{
    favouriteMealsContext.addFavourite(mealId)
   }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavStatusHandler}
            icon={isFavMeal ? "heart": "heart-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.mealTitle}>{selectedMeal.title}</Text>
      <AboutMeal
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealDetailsScreen;

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: windowHeight / 3,
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
});
