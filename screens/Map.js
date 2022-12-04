import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState,useLayoutEffect ,useCallback} from "react";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";
const Map = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  };
  const savePickedLocation=useCallback(()=>{
    if(!selectedLocation){
      Alert.alert("No location picked","choose a location to continue")
      return
    }
    navigation.navigate("AddPlace",{pickedLat:selectedLocation.lat,pickedLng:selectedLocation.lng})
  },[navigation,selectedLocation]
  )
  useLayoutEffect(()=>{
navigation.setOptions({
  headerRight:({tintColor})=>
  <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocation}/>
})
  },[navigation,savePickedLocation])
  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation &&<Marker
        title="picked location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />
}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
