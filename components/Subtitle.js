import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitle:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
       
      },
      subTitleContainer:{
        marginVertical:6,
        marginHorizontal:12,
        padding:16,
        borderBottomColor:"#ba55d3",
        borderBottomWidth:1
      }
})