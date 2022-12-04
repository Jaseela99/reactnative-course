import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <>
    <StatusBar style="dark"/>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="AllPlaces" component={AllPlaces}/>
      <Stack.Screen name="AddPlace" component={AddPlace}/>
    </Stack.Navigator>
    
   </NavigationContainer>
   </>

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
