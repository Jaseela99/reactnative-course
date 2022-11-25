import { StyleSheet, Text ,Platform} from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'

const Title = ({children}) => {
  return (
      <Text style={styles.gameTitle}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    gameTitle:{
        fontFamily:"open-sans-bold",
        fontSize:24,
        textAlign:"center",
         color:Colors.titleColor,
         borderBottomWidth:Platform.OS === "android"? 2:0,
        //borderBottomWidth:Platform.select({ios:0,android:2}),
         borderBottomColor:Colors.titleColor,
         padding:16,
        // maxWidth:"80%"
       },
})