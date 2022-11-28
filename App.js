import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <CategoriesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
