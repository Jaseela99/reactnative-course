import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./UI/CustomButton";
import { colors } from "../constants/colors";

const LocationPicker = () => {
  const pickOnMapHandler = () => {};
  const locateUserHandler = () => {};
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.buttonContainer}>
        <CustomButton icon="location" onPress={locateUserHandler}>
          Locate User
        </CustomButton>
        <CustomButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </CustomButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  mapPreview: {
    height: 200,
    width: "100%",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray600,
    borderRadius: 8,
  },
  
});
