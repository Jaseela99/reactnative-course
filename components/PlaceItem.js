import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
const PlaceItem = ({ place, onSelect }) => {
   
  return (
    <Pressable
      onPress={onSelect.bind(this,place.id)}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        {/* <Text style={styles.address}>{place.address}</Text> */}
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: colors.primary800,
    elevation: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primary100,
  },
  address: {
    fontSize: 12,
    color: colors.primary100,
  },
});
