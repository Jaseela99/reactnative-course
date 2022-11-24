import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
      <Text style={styles.gameTitle}>{children}</Text>
    
  )
}

export default Title

const styles = StyleSheet.create({
    gameTitle:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
         color:"#4b0082",
         borderBottomWidth:1,
         borderBottomColor:"#4b0082",
         padding:16
       },
})