import { Alert, Button, StyleSheet,View } from 'react-native'
import React from 'react'
import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker';

const ImagePicker = () => {
    const [status, requestPermission] = useCameraPermissions();
    const verifyPermissionsIos=async()=>{
        if(status.status===PermissionStatus.UNDETERMINED){ //if status is undetermined
           const response=await requestPermission() 
           return response.granted //returns true or false wrt request
        }
        if(status.status===PermissionStatus.DENIED){
            Alert.alert("permission insufficient!!")
            return false
        }
        return true
    }
    const takeImageHandler=async()=>{
   const hasPermission= await verifyPermissionsIos()
   if(!hasPermission){
    return 
   }
   const image=await launchCameraAsync({
    allowsEditing:true,
    aspect:[16,9],
    quality:0.7,
   })
   console.log(image)
    }
  return (
    <View>
      <View></View>
      <Button title="take image" onPress={takeImageHandler}/>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({})