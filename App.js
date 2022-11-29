import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="welcome"
        screenOptions={{
          drawerActiveBackgroundColor: "black",
          drawerActiveTintColor: "white",
          drawerStyle: { backgroundColor: "#dda0dd" },
          headerStyle: { backgroundColor: "#9932cc" },
          headerTintColor: "white",
          drawerPosition:"right"
        }}
      >
        <Drawer.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "welcome user",
            drawerIcon: ({ color,size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Drawer.Screen name="user" component={UserScreen}
        options={{
          drawerIcon: ({ color,size }) => <Ionicons name="person" size={size} color={color} />,

        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
