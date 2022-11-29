import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
  const renderMeals = (itemData) => {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.mealsContainer}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});
