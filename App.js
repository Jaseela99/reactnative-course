import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
const Stack= createNativeStackNavigator()
const Tab= createBottomTabNavigator()

const ViewExpenses=()=>{
  return(<Tab.Navigator>
    <Tab.Screen name="AllExpenses" component={AllExpenses}/>
    <Tab.Screen name="RecentExpenses" component={RecentExpenses}/>
   </Tab.Navigator>)
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
         <Stack.Navigator initialRouteName="ViewExpenses">
          <Stack.Screen name="ViewExpenses" component={ViewExpenses}/>
          <Stack.Screen name="ManageExpense" component={ManageExpense}/>
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
