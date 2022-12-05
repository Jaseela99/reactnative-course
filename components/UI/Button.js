import { StyleSheet, Text,Pressable} from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

const Button = ({onPress,children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[pressed && styles.pressed,styles.button ]}>
    <Text style={styles.text}>{children}</Text>
      </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        justifyContent:"center",
        alignItems:"center",
        margin:4,
        backgroundColor:colors.primary500,
        borderRadius:4,
        elevation:2
    
      },
      pressed:{
        opacity:0.7
      },
      text:{
        textAlign:"center",
        fontSize:16,
        color:colors.primary800
      }
})