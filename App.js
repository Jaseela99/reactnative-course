import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from "@expo/vector-icons"
const Tab=createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
       headerStyle: { backgroundColor:"#9932cc" },
       headerTintColor:"white",
       tabBarActiveTintColor:"#ffb6c1",
       tabBarActiveBackgroundColor:"#9932cc"
    }}>
      <Tab.Screen name="welcome" component={WelcomeScreen}
       options={{
        tabBarIcon:({color})=><Ionicons name="home" color={color} size={24}/>
       }}/>
      <Tab.Screen name="user" component={UserScreen}
      options={{
        tabBarIcon:({color})=><Ionicons name="person" color={color} size={24}/>
       }}/>
    </Tab.Navigator>
    </NavigationContainer>
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
