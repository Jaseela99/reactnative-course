import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { colors } from '../../constants/colors'
const CustomButton = ({onPress,icon,children}) => {
  return (
  <Pressable onPress={onPress} style={({pressed})=>[pressed && styles.pressed,styles.button ]}>
<Ionicons style={styles.icon} name={icon} size={18} color={colors.primary50}/>
<Text style={styles.text}>{children}</Text>
  </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:4,
        borderWidth:2,
        borderColor:colors.primary50,
        borderRadius:4
    
      },
      pressed:{
        opacity:0.7
      },
      icon:{
       marginRight:6
      },
      text:{
        color:colors.primary50,
        fontSize:16
      }
})