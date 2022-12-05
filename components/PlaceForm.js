import { StyleSheet, Text, ScrollView, View, TextInput } from "react-native";
import React, { useCallback, useState } from "react";
import { colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "./UI/Button";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [pickedImage, setPickedImage] = useState();

  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle);
  };
  const onTakeImage = (imageUri) => {
    setPickedImage(imageUri);
  };
  const onPickLocation = useCallback((location) => {
    setPickedLocation(location);
  },[])
  const savePlaceHandler = () => {
    console.log(enteredTitle)
    console.log(pickedImage)
    console.log(pickedLocation)
  };
  return (
    <ScrollView
      style={styles.formContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={onTakeImage} />
      <LocationPicker onPickLocation={onPickLocation} />
      <Button onPress={savePlaceHandler}>Submit</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: colors.primary800,
    fontSize: 16,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: colors.primary800,
    borderBottomWidth: 2,
    backgroundColor: colors.primary100,
    borderRadius: 8,
  },
});
