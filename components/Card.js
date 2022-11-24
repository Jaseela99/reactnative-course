import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../utils/colors";

const Card = ({children}) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
      fontFamily:"open-sans",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor:Colors.numberBox,
        marginTop: 24,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 6, //android specific property for shadow
      },
})