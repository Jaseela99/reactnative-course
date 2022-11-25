import { StyleSheet,View,Image,Text, Dimensions } from 'react-native'
import React from 'react'
import Title from "../components/Title"
import CustomButton from "../components/CustomButton"
import { Colors } from '../utils/colors'
const ResultScreen = ({rounds,number,newGameHandler}) => {
  return (
    <View style={styles.resultContainer}>
      <Title >GAME OVER!!</Title>
      <View style={styles.resultImage}>
       <Image style={styles.image} source={require("../assets/images/gameover.jpg")}/>
      </View>
   
        <Text style={styles.summaryText}><Text style={styles.highlight}>{rounds}</Text> Guesses taken to find the number <Text style={styles.highlight}>{number}</Text>.</Text>
        <CustomButton onPress={newGameHandler}>Play Again</CustomButton>
    </View>
  )
}


const deviceWidth=Dimensions.get('window').width

export default ResultScreen

const styles = StyleSheet.create({
  resultContainer:{
    flex:1,
    padding:24,
    justifyContent:"center",
    alignItems:"center"
  },
  resultImage:{
    borderRadius:deviceWidth< 390 ?75: 150,
    height:deviceWidth< 390 ?150: 300,
    width:deviceWidth< 390 ?150: 300,
    borderWidth:3,
    borderColor:Colors.ripple,
    overflow:"hidden",
    margin:36, 
  },
  image:{
    width:"100%",
    height:"100%"
  },
  summaryText:{
    fontFamily:"open-sans",
    fontSize:18,
    textAlign:"center",
    marginBottom:20
  },
  highlight:{
    fontFamily:"open-sans-bold",
    color:Colors.titleColor
  }
})