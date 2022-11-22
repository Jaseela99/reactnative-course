import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}> I m the first text</Text>
      </View>
      <Text style={styles.dummyText}>hello world!!</Text>
      <Button title="press me "/>
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
  dummyText:{
    margin:12,
    borderColor:"red",
    borderWidth:1,
    padding:16
  }
});
