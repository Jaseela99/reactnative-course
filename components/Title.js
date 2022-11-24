import { StyleSheet, Text, View } from 'react-native'
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
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
         color:Colors.titleColor,
         borderBottomWidth:1,
         borderBottomColor:Colors.titleColor,
         padding:16
       },
})