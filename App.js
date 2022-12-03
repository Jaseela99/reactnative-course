import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { GlobalStyles } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect } from "react";
import IconButton from "./components/UI/IconButton";
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary450 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: GlobalStyles.colors.primary150 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary450 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: GlobalStyles.colors.primary150 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"log-out"}
              size={35}
              color={tintColor}
              onPress={authContext.logout()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.isAuthenticated && <AuthStack />}
      {!authContext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
