import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
   ( async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
  })()
  }, []);
  const showMapHandler=async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }
  return (
    <View style={styles.container}>
      <Button title="get Map" onPress={showMapHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
