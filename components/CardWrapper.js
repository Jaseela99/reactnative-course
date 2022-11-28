import { StyleSheet, View,Platform ,Dimensions} from 'react-native'
import React from 'react'

const CardWrapper = ({children}) => {
  return (
    <View style={styles.cardWrap}>{children}</View>
  )
}

export default CardWrapper
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    cardWrap: {
        margin: 16,
        elevation: 2,
        borderRadius: 8,
        flex: 1,
        height: windowHeight / 5,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
      },
})