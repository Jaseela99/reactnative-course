import { Button, StyleSheet, Text, View ,TextInput, ScrollView} from 'react-native';
import React,{useState} from "react"
export default function App() {
  const[inputText,setInputText]=useState("")
  const[goals,setGoals]=useState([])
  const goalInputHandler=(inputText)=>{
   setInputText(inputText)
  }
  const addGoalHandler=()=>{
   setGoals((prev)=>[...prev,inputText])
   setInputText("")
  }
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput placeholder="Enter your goal!!" value={inputText} style={styles.input} onChangeText={goalInputHandler}/>
      <Button title="add goal" onPress={addGoalHandler}/>
     </View>
     <View style={styles.listContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {goals.map((goal,idx)=>
      <View style={styles.goalContainer} key={idx}>
      <Text style={styles.goalText} >{goal}</Text>
      </View>
      )}
      </ScrollView>
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
  borderRadius:10,
  fontSize:16
  },
  listContainer:{
    flex:6,
    marginTop:20
  },
  goalContainer:{
  backgroundColor:"#5f9ea0",
  padding:10,
  marginBottom:10,
  borderRadius:10,
  fontSize:16
  
},
goalText:{
    color:"#ffffff",

  }
});
