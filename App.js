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
    flex:1,
    paddingTop:50,
    paddingHorizontal:14
  },
  inputContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:"#c0c0c0"
  },
  input:{
  borderColor:"#c0c0c0",
  borderWidth:1,
  width:'70%',
  marginRight:10,
  padding:8,
  borderRadius:10
  },
  listContainer:{
    flex:6,
    marginTop:20
  }
});
