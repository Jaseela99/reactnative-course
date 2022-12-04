import { Alert, Button, StyleSheet, View ,Text,Image} from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { colors } from "../constants/colors";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();
//   const [status, requestPermission] = useCameraPermissions();
//   const verifyPermissionsIos = async () => {
//     if (status.status === PermissionStatus.UNDETERMINED) {
//       //if status is undetermined
//       const response = await requestPermission();
//       return response.granted; //returns true or false wrt request
//     }
//     if (status.status === PermissionStatus.DENIED) {
//       Alert.alert("permission insufficient!!");
//       return false;
//     }
//     return true;
//   };
  const takeImageHandler = async () => {
    // const hasPermission = await verifyPermissionsIos();
    // if (!hasPermission) {
    //   return;
    // }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });
    if (!image.canceled) {
        setPickedImage(image.assets[0].uri);
      }
    console.log(image)
  };
  let imagePreview = <Text>No image taken</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="take image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview:{
        height:200,
        width:"100%",
        marginVertical:8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.gray600,
        borderRadius:8
    },
    image:{
        width:"100%",
        height:"100%"
    }
});
