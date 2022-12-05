import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";


const PlacesList = ({ places }) => {
  const navigation=useNavigation()
  const onSelect=(id)=>{
    navigation.navigate("PlaceDetails",{
      placeId:id
    })
  }
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Places added Yet</Text>
      </View>
    );
  }

  const renderPlaces = ({ item }) => {
    return <PlaceItem place={item} onSelect={onSelect}/>;
  };
  return (
    <FlatList
      data={places}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderPlaces}
      style={styles.list}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: colors.white,
  },
});
