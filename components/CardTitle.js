import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'

const CardTitle = ({children,style}) => {
  return (
    <Text style={[styles.cardTitle,style]}>{children}</Text>
   
  )
}

export default CardTitle

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 20,
        fontFamily:"open-sans",
        color: Colors.textColor,
        textAlign: "center",
      },

})