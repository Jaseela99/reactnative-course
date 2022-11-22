import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput placeholder="Enter your goal!!" style={styles.input}/>
      <Button title="add goal"/>
     </View>
     <View style={styles.listContainer}>
      <Text>List of goals...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  input:{
  borderColor:"#c0c0c0",
  borderWidth:1,
  width:'80%',
  marginRight:10,
  padding:8
  },
  listContainer:{}
});
