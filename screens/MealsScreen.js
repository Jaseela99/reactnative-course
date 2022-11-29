import React, { useLayoutEffect } from "react";
// import {useRoute} from "@react-navigation/native"
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealsList from "../components/MealsList";

const MealsScreen = ({ route, navigation }) => {
  // const route=useRoute()
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsScreen;
