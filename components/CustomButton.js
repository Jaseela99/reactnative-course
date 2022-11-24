import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})