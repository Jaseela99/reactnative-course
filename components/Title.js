import { StyleSheet, Text } from 'react-native'
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
         borderBottomWidth:1,
         borderBottomColor:Colors.titleColor,
         padding:16
       },
})