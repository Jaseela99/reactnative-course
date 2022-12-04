import { StyleSheet, Image, View ,Text} from "react-native";
import React, { useState } from "react";
import CustomButton from "./UI/CustomButton";
import { colors } from "../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import {useNavigation} from "@react-navigation/native"

const LocationPicker = () => {
  const navigation=useNavigation()
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermisson, requestPermission] = useForegroundPermissions();
  const verifyPermission = async () => {
    if (locationPermisson.status === PermissionStatus.UNDETERMINED) {
      //if status is undetermined
      const response = await requestPermission();
      return response.granted; //returns true or false wrt request
    }
    if (locationPermisson.status === PermissionStatus.DENIED) {
      Alert.alert(
        "permission insufficient!!",
        "grant location permission to continue"
      );
      return false;
    }
    return true;
  };
  const pickOnMapHandler = () => {
    navigation.navigate("Map")
  };

  const locateUserHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
        lat:location.coords.latitude,
        lng:location.coords.longitude
    })
  };
  let locationPreview = <Text>No location picked taken</Text>;
  if (pickedLocation) {
    locationPreview = <Image source={{uri:getMapPreview(pickedLocation.lat,pickedLocation.lng)}} style={styles.mapImage}/>

  }
  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
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
    justifyContent: "space-around",
    alignItems: "center",
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
  mapImage:{
    width:"100%",
    height:"100%",
    borderRadius:4
  }
});
