import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'

const GuessLog = ({round,guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{round}</Text>
      <Text style={styles.itemText}>Guesses:{guess}</Text>
    </View>
  )
}

export default GuessLog

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.ripple,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.buttonColor,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4
    },
    itemText:{
        fontFamily:"open-sans",
        fontSize:16,
        color:Colors.logColor
    }
})